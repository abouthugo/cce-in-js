import { leastInterval } from "./leastInterval";

test("Testing base cases function", () => {
  let a = ["A", "A", "A", "B", "B", "B"];
  let n = 2;
  let res = leastInterval(a, n);
  expect(res).toBe(8);
  a = ["A", "A", "A", "B", "B", "B"];
  n = 0;
  res = leastInterval(a, n);
  expect(res).toBe(6);
  a = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"];
  n = 2;
  res = leastInterval(a, n);
  expect(res).toBe(16);
});
