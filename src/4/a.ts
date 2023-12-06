const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

// Some really crazy and complex code later...
const regexNumber = /\d+/g;

const result = input
  .split("\n")
  .map((line) => {
    const gameId = line.split(":")[0].match(regexNumber)?.map(Number)[0];

    const winningNumbers = line
      .split(":")[1]
      .split("|")[0]
      .split(" ")
      .filter((str) => str !== "");
    const numbers = line
      .split(":")[1]
      .split("|")[1]
      .split(" ")
      .filter((str) => str !== "");
    let repeatedNumbers = 0;
    numbers.map((n) => {
      if (winningNumbers.includes(n)) {
        repeatedNumbers += 1;
      }
    });
    console.log(Math.floor(Math.pow(2, repeatedNumbers - 1)));
    return Math.floor(Math.pow(2, repeatedNumbers - 1));
  })
  .reduce((a, b) => a + b);

console.log({ result });
