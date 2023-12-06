const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

// Some really crazy and complex code later...

const lines = input.split("\n");

const time = Number(lines[0].split(":")[1].trim().replace(/\s/g, ""));

const distance = Number(lines[1].split(":")[1].trim().replace(/\s/g, ""));

console.log("Time: ", { time });
console.log("Distance: ", { distance });

let best = [];

// we could do array with 1 item to solve it but nah
let currentBest = [];
const currentBestRaceDistance = distance;
for (let j = 0; j <= time; j++) {
  if (j * (time - j) > currentBestRaceDistance) {
    currentBest.push(j);
  }
}
best.push(currentBest.length);

console.log(best.reduce((a, b) => a * b));
