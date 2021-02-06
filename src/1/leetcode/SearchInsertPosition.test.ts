import { searchInsert, searchInsert2 } from "./SearchInsertPosition";

test("search insert position", () => {
  const arr = [1, 3, 5];
  const t = 5;
  const result = searchInsert(arr, t);
  expect(result).toBe(2);
});

test("High-Low binary method", () => {
  const arr = [7, 44, 81, 99, 111];
  const t = 56;
  const result = searchInsert2(arr, t);
  expect(result).toBe(2);
});
