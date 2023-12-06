const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

// needs optimization

function generateNumbers(gameId: number, repeatedNumber: number) {
  let result = [];

  for (let i = gameId + 1; i <= gameId + repeatedNumber; i++) {
    result.push(i);
  }

  return result;
}

const regexNumber = /\d+/g;

const obj = input
  .split("\n")
  .map((line) => line.split(":")[0].match(regexNumber)!.map(Number)[0])
  .reduce((o, key) => ({ ...o, [key]: 1 }), {});

const getGame = (line: any) => {
  const gameId = line.split(":")[0].match(regexNumber)!.map(Number)[0];
  if (gameId === input.split("\n")[input.split("\n").length - 1]) return;
  const winningNumbers = line
    .split(":")[1]
    .split("|")[0]
    .split(" ")
    .filter((str: string) => str !== "");
  const numbers = line
    .split(":")[1]
    .split("|")[1]
    .split(" ")
    .filter((str: string) => str !== "");
  let repeatedNumbers = 0;
  numbers.map((n: any) => {
    if (winningNumbers.includes(n)) {
      repeatedNumbers += 1;
    }
  });
  const copies = generateNumbers(gameId, repeatedNumbers);
  copies.map((n) => {
    //@ts-ignore
    obj[n] += 1;
    getGame(input.split("\n")[n - 1]);
  });
};
const result = input.split("\n").map((line) => getGame(line));
console.log(result);

console.log({ obj });
//@ts-ignore
console.log(Object.values(obj).reduce((a, b) => a + b));
