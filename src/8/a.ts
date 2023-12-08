const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

const [directions, network] = input.split("\n\n");
// AAA
let currentLine = network.split("\n").find((a) => a.substring(0, 3) === "AAA")!;
let count = 0;

const lookup = (direct: string) => {
  const currentNode = currentLine.substring(0, 3)!;
  console.log({ currentNode });
  if (currentNode === "ZZZ") return count;

  const [leftNode, rightNode] = currentLine
    .match(/\(([^)]+)\)/)![1]
    .split(",")
    .map((s) => s.trim());

  direct === "L"
    ? (currentLine = network.split("\n").find((a) => a === leftNode)!)
    : (currentLine = network.split("\n").find((a) => a === rightNode)!);

  count++;
};

directions.split("").map((direct) => lookup(direct));
