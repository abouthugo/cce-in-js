import { MinimalTree } from "./MinimalTree";

test("Basic case", () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100 + 1));
  }
  arr.sort((a, b) => a - b);
  console.log(arr);

  const minimalTree = MinimalTree(arr);
  if (minimalTree) minimalTree.print();
});
