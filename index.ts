const numbs: string[] = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty-one",
  "twenty-two",
  "twenty-three",
  "twenty-four",
  "twenty-five",
  "twenty-six",
  "twenty-seven",
  "twenty-eight",
  "twenty-nine",
  "thirty",
  "thirty-one",
  "thirty-two",
  "thirty-three",
  "thirty-four",
  "thirty-five",
  "thirty-six",
  "thirty-seven",
  "thirty-eight",
  "thirty-nine",
  "forty",
  "forty-one",
  "forty-two",
  "forty-three",
  "forty-four",
  "forty-five",
  "forty-six",
  "forty-seven",
  "forty-eight",
  "forty-nine",
  "fifty",
  "fifty-one",
  "fifty-two",
  "fifty-three",
  "fifty-four",
  "fifty-five",
  "fifty-six",
  "fifty-seven",
  "fifty-eight",
  "fifty-nine",
  "sixty",
  "sixty-one",
  "sixty-two",
  "sixty-three",
  "sixty-four",
  "sixty-five",
  "sixty-six",
  "sixty-seven",
  "sixty-eight",
  "sixty-nine",
  "seventy",
  "seventy-one",
  "seventy-two",
  "seventy-three",
  "seventy-four",
  "seventy-five",
  "seventy-six",
  "seventy-seven",
  "seventy-eight",
  "seventy-nine",
  "eighty",
  "eighty-one",
  "eighty-two",
  "eighty-three",
  "eighty-four",
  "eighty-five",
  "eighty-six",
  "eighty-seven",
  "eighty-eight",
  "eighty-nine",
  "ninety",
  "ninety-one",
  "ninety-two",
  "ninety-three",
  "ninety-four",
  "ninety-five",
  "ninety-six",
  "ninety-seven",
  "ninety-eight",
  "ninety-nine",
];
const numberizer = (s: string) => Number(s);

const hundred = (n: number, m?: number) => {
  if (n > 0 && m && m > 0) return `${numbs[n]} hundred ${numbs[m]}`;
  if (m && m > 0) return `${numbs[m]}`;
  if (n > 0) return `${numbs[n]} hundred`;
  return ``;
};

const thousand = (n?: number) => (n ? `${numbs[n]} thousand` : `thousand`);

function number2words(n: number) {
  // works for numbers between 0 and 999999
  if (n <= 99) return numbs[n];
  const m = n.toString().split("");
  let first = numberizer(m[0]);
  let second = numberizer(m[m.length - 2] + m[m.length - 1]);
  if (n <= 999) return hundred(first, second);
  first = numberizer(m[1]);
  if (n <= 9999)
    return `${thousand(numberizer(m[0]))} ${hundred(first, second)}`.trim();
  first = numberizer(m[2]);
  if (n <= 99999)
    return `${thousand(numberizer(m[0] + m[1]))} ${hundred(first, second)}`;
  first = numberizer(m[3]);
  if (n <= 999999)
    return `${hundred(
      numberizer(m[0]),
      numberizer(m[1] + m[2])
    )} ${thousand()} ${hundred(first, second)}`;
}

console.log(number2words(0), "zero");
console.log(number2words(1), "one");
console.log(number2words(8), "eight");
console.log(number2words(10), "ten");
console.log(number2words(19), "nineteen");
console.log(number2words(20), "twenty");
console.log(number2words(22), "twenty-two");
console.log(number2words(54), "fifty-four");
console.log(number2words(80), "eighty");
console.log(number2words(98), "ninety-eight");
console.log(number2words(100), "one hundred");
console.log(number2words(301), "three hundred one");
console.log(number2words(793), "seven hundred ninety-three");
console.log(number2words(800), "eight hundred");
console.log(number2words(650), "six hundred fifty");
console.log(number2words(1000), "one thousand");
console.log(number2words(1003), "one thousand three");
