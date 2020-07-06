// global variables
const CROS_PROXY_URL = "https://cors-anywhere.herokuapp.com";
const dataSource =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports";

// HTML element
const dateElement = document.getElementById("date");
const dataElement = document.getElementById("data");

// setting number format to 00
function format(number) {
  if (number < 10) return "0" + number;
  return number;
}

// convert to number
function number(data) {
  try {
    return parseInt(data, 10) || 0;
  } catch (e) {
    console.log(e);
  }
}

// subtract day function
Date.prototype.subtractDays = function (d) {
  this.setTime(this.getTime() - d * 24 * 60 * 60 * 1000);
  console.log(this);
  return this;
};

// API call
function fetchData(d) {
  return new Promise((resolve, reject) => {
    const day = format(d.getDate());
    const month = format(d.getMonth());
    const year = format(d.getYear());
    const date = `${month},${day},${year}`;

    dataElement.innerText = `Date: ${date}`;
    dataElement.innerText = `Please wait...`;

    let fetchUrl = `${CROS_PROXY_URL}/${dataSource}/${date}.csv`;

    fetch(fetchUrl)
      .then((response) => {
        return response && response.ok
          ? response.text()
          : fetchData(d.subtractDays(1));
      })
      .then((text) => {
        return response(text);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
