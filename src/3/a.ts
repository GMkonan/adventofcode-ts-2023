const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

const result = input;

console.log({ result });
