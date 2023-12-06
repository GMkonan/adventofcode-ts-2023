const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
type SetT = Set<[rowss: number, colss: number]>;

const engine = input.split("\n");
const coordinates = new Set();

// 467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..

for (let i = 0; i < engine.length; i++) {
  for (let j = 0; j < engine.length; j++) {
    // if digit or .
    if (/\d/.test(engine[i][j]) || engine[i][j] === ".") {
      continue;
    }
    // console.log(engine[i][j]);
    // check in grid (square) format
    // ss = surrounding symbol
    for (let rowss of [i - 1, i, i + 1]) {
      for (let colss of [j - 1, j, j + 1]) {
        // out of bounds
        if (
          rowss < 0 ||
          rowss >= engine.length ||
          colss < 0 ||
          colss >= engine[colss].length ||
          /\d/.test(engine[rowss][colss]) === false
        ) {
          continue;
        }
        // basically go scanning to the left
        while (colss > 0 && /\d/.test(engine[rowss][colss - 1])) {
          colss -= 1;
        }
        // sadly sets dont work with objects/arrays (which are objects) in assuring uniqueness
        coordinates.add(JSON.stringify([rowss, colss]));
        // console.log(engine[rowss][colss]);
      }
    }
  }
}

let nList = [];

// reconstruct the entire number from first digit coordinates
for (let a of coordinates) {
  const cr = JSON.parse(a as string);
  console.log(cr);
  // scan to the right in row
  let num = "";
  while (cr[1] < engine[cr[0]].length && /\d/.test(engine[cr[0]][cr[1]])) {
    // acc to form entire number
    num += engine[cr[0]][cr[1]];
    cr[1] += 1;
  }
  nList.push(num);
}

console.log(nList.map(Number).reduce((a, b) => a + b));
