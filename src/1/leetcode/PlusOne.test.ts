import { mySolution } from "./PlusOne";

test("[0] -> [1]", () => {
  expect(mySolution([0])).toStrictEqual([1]);
});

test("[0, 0] -> [0, 1]", () => {
  expect(mySolution([0, 0])).toStrictEqual([0, 1]);
});

test("[9] -> [1, 0]", () => {
  expect(mySolution([9])).toStrictEqual([1, 0]);
});
