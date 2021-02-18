import { sortStack } from "./sortStack";
import MyStack from "./Stack";

test("Testing basic case", () => {
  const elements = [10, 1, 4, 78, 12];
  const sortedElements = elements.sort((a, b) => a - b);
  const stack = new MyStack<number>();
  for (const e of elements) stack.push(e);

  const result = sortStack(stack).flatten();
  expect(result).toStrictEqual(sortedElements);
});
