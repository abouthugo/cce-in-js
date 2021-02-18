import QueueWithStacks from "./QueueWithStacks";

test("Adding elements", () => {
  const queue = new QueueWithStacks<number>();
  queue.add(3);
  queue.add(2);
  queue.add(1);
  queue.add(0);

  expect(queue.peek()).toBe(3);
});

test("Removing 1 element", () => {
  const queue = new QueueWithStacks<number>();
  queue.add(3);
  queue.add(2);
  queue.add(1);
  queue.add(0);
  queue.remove();

  expect(queue.peek()).toBe(2);
});

test("Removing 2 elements", () => {
  const queue = new QueueWithStacks<number>();
  queue.add(3);
  queue.add(2);
  queue.add(1);
  queue.add(0);
  queue.remove();
  queue.remove();

  expect(queue.peek()).toBe(1);
});

test("Removing 3 elements", () => {
  const queue = new QueueWithStacks<number>();
  queue.add(3);
  queue.add(2);
  queue.add(1);
  queue.add(0);
  queue.remove();
  queue.remove();
  queue.remove();

  expect(queue.peek()).toBe(0);
});

test("Removing all elements", () => {
  const queue = new QueueWithStacks<number>();
  queue.add(3);
  queue.remove();

  const result = () => {
    queue.peek();
  };

  expect(result).toThrow();
});
