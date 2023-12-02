const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

const result = input
  .split("\n")
  .map((string) => {
    // match any digit [0-9]
    const numbers = string.match(/\d/g);
    return numbers && `${numbers[0]}${numbers[numbers.length - 1]}`;
  })
  .map(Number)
  .reduce((sum, current) => sum + current, 0);

console.log({ result });
