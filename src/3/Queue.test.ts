import MyQueue from "./Queue";

test("Adding into the queue", () => {
  const queue = new MyQueue();
  queue.add(10);
  queue.add(7);
  queue.add(144);
  const result = queue.flatten();

  expect(result).toStrictEqual([10, 7, 144]);
});

test("Removing from the queue", () => {
  const queue = new MyQueue();
  queue.add(10);
  queue.add(7);
  queue.add(144);
  const val = queue.remove();
  const result = queue.flatten();
  expect(val).toBe(10);
  expect(result).toStrictEqual([7, 144]);
});

test("Peeking from the queue", () => {
  const queue = new MyQueue();
  queue.add(1);
  queue.add(2);
  queue.add(3);
  const val = queue.peek();
  const result = queue.flatten();
  expect(val).toBe(1);
  expect(result).toStrictEqual([1, 2, 3]);
});
