## Advent of code Typescript starter template (Bun)
Advent of Code is an annual online programming event that takes place through the first 25 days of December, with each day featuring a new coding challenge. Participants solve puzzles using their programming skills, while competing (or not) in each challenge. If you want to know more check [their website](https://adventofcode.com/2022/about).

This is a simple typescript template using [Bun](https://bun.sh/) that you can use to not worry about setting up things just to solve the challenge. just enter your puzzle input in the `input.txt` of the corresponding day and run your code.

### Installing
This repo uses [Bun](https://bun.sh/) so you should experience a very high speed development experience. To install bun the easiest method is just to `npm install`:

```bash
npm install -g bun
```
Or just install via `curl`:
```bash
curl -fsSL https://bun.sh/install | bash
```
You can check other methods in their website.

### Running
I recommend using `watch mode` to run your code. Example:

```bash
bun ./1/a.ts --watch
```
### Challenge's File Structure
Every challenger folder has an `a.ts` and `b.ts`. Each of them comes with some code for reading a file in Bun.
You are free to just delete it of course.

```typescript
const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

// Some really crazy and complex code later...

const result = input;

console.log({ result });

```