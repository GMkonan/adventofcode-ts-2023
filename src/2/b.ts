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
  let redCubes = 0;
  let blueCubes = 0;
  let greenCubes = 0;
  for (let set of cubeSets) {
    const cubesByColor = set.split(",");
    for (let cube of cubesByColor) {
      const number = cube.match(regexNumber)?.map(Number);
      const color = cube.match(regexText);

      if (color![0] === "red" && (redCubes < number![0] || redCubes == 0)) {
        console.log(color![0]);
        console.log({ redCubes });
        redCubes = number![0];
      }
      if (
        color![0] === "green" &&
        (greenCubes < number![0] || greenCubes == 0)
      ) {
        greenCubes = number![0];
      }
      if (color![0] === "blue" && (blueCubes < number![0] || blueCubes == 0)) {
        blueCubes = number![0];
      }
    }
  }
  console.log({ redCubes, greenCubes, blueCubes });
  return redCubes * blueCubes * greenCubes;
});

const final = result.reduce((a, b) => a + b);

console.log({ final });
console.log({ result });
