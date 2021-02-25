import routeBetween from "./routeBetweenNodes";

const graph = [[1, 5], [2, 3], [7], [], [0], [2], [1, 4], [3]];

test("Path exists", () => {
  let result = routeBetween(6, 0, graph);
  expect(result).toBe(true);
  result = routeBetween(0, 7, graph);
  expect(result).toBe(true);
  result = routeBetween(6, 7, graph);
  expect(result).toBe(true);
});

test("Path does not exists", () => {
  let result = routeBetween(0, 6, graph);
  expect(result).toBe(false);
  result = routeBetween(5, 4, graph);
  expect(result).toBe(false);
  result = routeBetween(4, 6, graph);
  expect(result).toBe(false);
  result = routeBetween(5, 0, graph);
  expect(result).toBe(false);
  result = routeBetween(0, 4, graph);
  expect(result).toBe(false);
  result = routeBetween(0, 6, graph);
  expect(result).toBe(false);
});
