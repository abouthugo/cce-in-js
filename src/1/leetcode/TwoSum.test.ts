import { bruteMethod, hashmapMethod, hashmapOnePassMethod } from "./TwoSum";

test("Brute force method", () => {
  const result = bruteMethod([2, 7, 11, 15], 22);
  console.log(result);
  expect(result).toStrictEqual([1, 3]);
});

test("Hashmap method", () => {
  const result = hashmapMethod([2, 7, 11, 15], 22);
  console.log(result);
  expect(result).toStrictEqual([1, 3]);
});

test("Hashmap one pass method", () => {
  const result = hashmapOnePassMethod([2, 7, 11, 15], 22);
  console.log(result);
  expect(result).toStrictEqual([1, 3]);
});
