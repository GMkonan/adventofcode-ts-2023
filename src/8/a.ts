const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

// should be fun to make it a tree

const [directions, network] = input.split("\n\n");
// AAA
let currentLine = network.split("\n").find((a) => a.substring(0, 3) === "AAA")!;
let count = 0;

const lookup = (direct: string) => {
  const currentNode = currentLine.substring(0, 3)!;
  if (currentNode === "ZZZ") return count;

  const [leftNode, rightNode] = currentLine
    .match(/\(([^)]+)\)/)![1]
    .split(",")
    .map((s) => s.trim());

  direct === "L"
    ? (currentLine = network
        .split("\n")
        .find((a) => a.substring(0, 3) === leftNode)!)
    : (currentLine = network
        .split("\n")
        .find((a) => a.substring(0, 3) === rightNode)!);

  count++;
};

const result = () => {
  let final = null;
  while (!final) {
    for (let direct of directions) {
      final = lookup(direct);
    }
  }
  console.log({ final });
};

result();
