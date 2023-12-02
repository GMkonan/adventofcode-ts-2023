const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

// Some really crazy and complex code later...

const result = input;

console.log({ result });
