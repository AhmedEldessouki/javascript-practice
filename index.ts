function domainName(url = ""): string {
  //your code here

  return url.replace(/www.|http:\/\/|https:\/\//gi, "").split(".")[0];
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("https://www.codewars.com/kata/"), "youtube");
console.log(
  domainName("https://www.4akn27s4apz4bcdg-wgan7l36.biz/index.php"),
  "youtube"
);
