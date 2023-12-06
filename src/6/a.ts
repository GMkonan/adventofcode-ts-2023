const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

// Some really crazy and complex code later...

const lines = input.split("\n");

const times = lines[0]
  .split(":")[1]
  .split(" ")
  .filter((n) => n)
  .map(Number);

const distances = lines[1]
  .split(":")[1]
  .split(" ")
  .filter((n) => n)
  .map(Number);

// console.log("Times: ", { times });
// console.log("Distances: ", { distances });

let best = [];

for (const [i, time] of times.entries()) {
  console.log({ time });
  let currentBest = [];
  const currentBestRaceDistance = distances[i];
  for (let j = 0; j <= time; j++) {
    if (j * (time - j) > currentBestRaceDistance) {
      currentBest.push(j);
    }
  }
  best.push(currentBest.length);
}

console.log(best.reduce((a, b) => a * b));
