import LinkedList from "./LinkedList";
import { kthToLast } from "./KToLast";

const list = new LinkedList<number>();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

test("Testing 3rd to last", () => {
  if (list.head !== null) {
    const result = kthToLast(list.head, 3);
    expect(result.data).toBe(2);
  }
});

test("Testing out of bounds error", () => {
  const errorWrap = () => {
    if (list.head !== null) {
      kthToLast(list.head, 5);
    }
  };
  expect(errorWrap).toThrow(Error);
});
