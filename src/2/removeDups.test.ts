import LinkedList from "./LinkedList";
import { removeDups, removeDupsNoBuffer } from "./removeDups";

const list = new LinkedList<number>();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(1);
list.insert(4);
list.insert(5);

test("Testing my solution", () => {
  if (list.head !== null) {
    removeDups(list.head);
    const results = list.toString();

    expect(results).toBe("1 -> 2 -> 3 -> 4 -> 5");
  }
});

test("Testing no buffer solution", () => {
  list.insert(5);
  if (list.head !== null) {
    removeDupsNoBuffer(list.head);
    const results = list.toString();

    expect(results).toBe("1 -> 2 -> 3 -> 4 -> 5");
  }
});
