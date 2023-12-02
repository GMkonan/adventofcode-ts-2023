const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

const result = input
  .split("\n")
  .map((string) => {
    // positive look ahead (checks overlap cases like sevenine)
    const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/gi;

    const listOfMatches = Array.from(string.matchAll(regex), (x) => x[1]);

    const numbers = listOfMatches.map((a) => {
      // would love to do a match here
      switch (a) {
        case "one":
          return 1;
        case "two":
          return 2;
        case "three":
          return 3;
        case "four":
          return 4;
        case "five":
          return 5;
        case "six":
          return 6;
        case "seven":
          return 7;
        case "eight":
          return 8;
        case "nine":
          return 9;
        default:
          return a;
      }
    });
    return numbers && `${numbers[0]}${numbers[numbers.length - 1]}`;
  })
  // turn strings and numbers and sum all with reduce
  .map(Number)
  .reduce((a, b) => a + b);

console.log({ result });
