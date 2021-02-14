import MyStack from "./Stack";

test("Testing push", () => {
  const stack = new MyStack();
  stack.push(23);
  stack.push(10);
  stack.push(2);
  const result = stack.flatten();
  expect(result).toStrictEqual([2, 10, 23]);
});

test("Testing peek", () => {
  const stack = new MyStack();
  stack.push(23);
  stack.push(10);
  stack.push(2);
  const peekVal = stack.peek();
  expect(peekVal).toBe(2);
});

test("Testing pop", () => {
  const stack = new MyStack();
  stack.push(23);
  stack.push(10);
  stack.push(2);
  const popped = stack.pop();
  const flatStack = stack.flatten();
  expect(popped).toBe(2);
  expect(flatStack).toStrictEqual([10, 23]);
});
