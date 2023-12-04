const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
// x number of cubes in bag
// either red green or blue

// possible games with:
// 12 red cubes, 13 green cubes and 14 blue cubes

const regexNumber = /\d+/g;
const regexText = /[a-zA-Z]+/g;

let games: string[] = [];

const result = input.split("\n").map((game) => {
  const gameId = game.split(":")[0];

  const cubeSets = game.split(":")[1].split(";");
  let impossibleGame = false;
  let possibleGameId = "";
  for (let set of cubeSets) {
    let impossible = false;
    const cubesByColor = set.split(",");
    for (let cube of cubesByColor) {
      const number = cube.match(regexNumber);
      const color = cube.match(regexText);
      // imposible games
      if (color![0] === "red" && (number![0] as unknown as number) > 12) {
        impossible = true;
        break;
      }
      if (color![0] === "green" && (number![0] as unknown as number) > 13) {
        impossible = true;
        break;
      }
      if (color![0] === "blue" && (number![0] as unknown as number) > 14) {
        impossible = true;
        break;
      }
      possibleGameId = gameId;
    }
    if (impossible === true) {
      impossibleGame = true;
      break;
    }
  }
  if (!impossibleGame) {
    games.push(possibleGameId);
  }
});

const final = games
  .map((game) => game.match(regexNumber)![0])
  .map(Number)
  .reduce((a, b) => a + b);

console.log({ final });
console.log({ result });
