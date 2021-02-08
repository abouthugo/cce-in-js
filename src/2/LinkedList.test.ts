import LinkedList from "./LinkedList";

const list = new LinkedList<number>();

test("Initial appending", () => {
  list.insert(23);

  const len = list.length;
  const head = list.head?.data;
  const tail = list.tail?.data;
  const result = len === 1 && head === 23 && tail === 23;

  expect(result).toBe(true);
});

test("Append at the end", () => {
  list.insertLast(1);

  const tail = list.tail?.data;
  const head = list.head?.data;
  const result = tail === 1 && head === 23 && list.length == 2;

  expect(result).toBe(true);
});

test("Append at the beginning", () => {
  list.insertFirst(15);

  const tail = list.tail?.data;
  const head = list.head?.data;
  const result = tail === 1 && head === 15 && list.length === 3;

  expect(result).toBe(true);
});

test("Append after existing item", () => {
  list.insertAfter(67, 23);

  const tail = list.tail?.data;
  const head = list.head?.data;
  const result = tail === 1 && head === 15 && list.length === 4;

  expect(result).toBe(true);
});

test("Append after non existing item", () => {
  list.insertAfter(77, 24);

  const tail = list.tail?.data;
  const head = list.head?.data;
  const result = tail === 77 && head === 15 && list.length === 5;

  expect(result).toBe(true);
});

test("Deleting an item in the middle", () => {
  list.delete(67);
  const tail = list.tail?.data;
  const head = list.head?.data;
  const result = tail === 77 && head === 15 && list.length === 4;
  expect(result).toBe(true);
});

test("Deleting the tail", () => {
  list.delete(77);
  const tail = list.tail?.data;
  const head = list.head?.data;
  const result = tail === 1 && head === 15 && list.length === 3;
  expect(result).toBe(true);
});

test("Deleting the head", () => {
  list.delete(15);
  const tail = list.tail?.data;
  const head = list.head?.data;
  const result = tail === 1 && head === 23 && list.length === 2;
  expect(result).toBe(true);
});

test("Deleting and making tail and head the same", () => {
  list.delete(1);
  const tail = list.tail?.data;
  const head = list.head?.data;
  const result = tail === 23 && head === 23 && list.length === 1;
  expect(result).toBe(true);
});

test("Deleting an item not in the list", () => {
  list.delete(99);
  const tail = list.tail?.data;
  const head = list.head?.data;
  const result = tail === 23 && head === 23 && list.length === 1;
  expect(result).toBe(true);
});
