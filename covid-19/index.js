// Global variables
const CORS_PROXY_URL = "https://cors-anywhere.herokuapp.com";
const dataSource =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports";
const MAX_RETRIES = 3;
let retry = 0;

// HTML element
const dateElement = document.getElementById("date");
const dataElement = document.getElementById("data");

// setting number format to 00
function format(number) {
  if (number < 10) return "0" + number;
  return number;
}

// Implement substract day function
Date.prototype.subtractDays = function (d) {
  this.setTime(this.getTime() - d * 24 * 60 * 60 * 1000);
  return this;
};

// API call
function fetchData(d) {
  return new Promise((resolve, reject) => {
    const day = format(d.getDate());
    const month = format(d.getMonth() + 1);
    const year = d.getFullYear();
    const date = `${month}-${day}-${year}`;

    dateElement.innerText = `Date: ${date}`;
    dataElement.innerText = "Loading...";

    let fetchUrl = `${dataSource}/${date}.csv`;
    fetch(fetchUrl)
      .then((response) => {
        return response && response.ok
          ? response.text()
          : fetchData(d.subtractDays(1));
      })
      .then((text) => {
        return resolve(text);
      })
      .catch((error) => {
        if (retry < MAX_RETRIES) {
          retry++;
          console.log("Retry loading data.");
          return fetchData(d.subtractDays(1));
        } else {
          reject(error);
        }
      });
  });
}

function number(data) {
  try {
    return parseInt(data, 10) || 0;
  } catch (error) {
    return 0;
  }
}

async function main() {
  try {
    let d = new Date();
    let data = await fetchData(d);

    data = data.split("\n");
    const PROVINCE = 2;
    const COUNTRY = 3;
    const CONFIRMED = 7;

    let countries = new Set();
    let countryConfirmedCases = [];

    for (let i = 1; i < data.length; i++) {
      items = data[i].split(",");
      let country = items[COUNTRY];
      const confirmedCase = items[CONFIRMED];
      if (country === "Others") country = `Others - ${items[PROVINCE]}`;
      if (!country || !confirmedCase) continue;
      countries.add(country);
      countryConfirmedCases[country] =
        number(countryConfirmedCases[country]) + number(confirmedCase);
    }

    let result = "";
    countries.forEach((country) => {
      confirmedCase = number(countryConfirmedCases[country]);
      result += `
        <li class="countryContainer">
          <span class="countryNames">${country}</span>: <span class="numbers">${confirmedCase}</span>
        </li>
      `;
    });
    result = `
      <ul>
        ${result}
      </ul>
    `;
    dataElement.innerHTML = result;
  } catch (error) {
    dataElement.innerText = "Could not load data. Please try again!";
  }
}

main();
