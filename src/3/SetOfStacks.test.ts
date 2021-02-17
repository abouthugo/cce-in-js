import SetOfStacks from "./SetOfStacks";

test("Pushing", () => {
  const stack = new SetOfStacks(2);
  stack.push(1);
  if (stack.top) {
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    expect(stack.peek()).toBe(6);
  }
});

test("Popping and peeking", () => {
  const stack = new SetOfStacks(2);
  stack.push(1);
  if (stack.top) {
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.pop();
    expect(stack.peek()).toBe(5);
    stack.pop();
    expect(stack.peek()).toBe(4);
    stack.pop();
    stack.pop();
    expect(stack.top.flatten()).toStrictEqual([2, 1]);
  }
});

test("Flatten function", () => {
  const stack = new SetOfStacks(2);
  stack.push(1);
  if (stack.top) {
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    expect(stack.flatten()).toStrictEqual([6, 5, 4, 3, 2, 1]);
  }
});
