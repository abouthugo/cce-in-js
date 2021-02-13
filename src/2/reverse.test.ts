import LinkedList from "./LinkedList";
import { reverse } from "./reverse";

test("Reversing a simple list", () => {
  const l = new LinkedList<number>();
  l.insert(1);
  l.insert(2);
  l.insert(3);
  if (l.head) {
    const result = reverse(l.head);
    expect(result.flatten()).toStrictEqual([3, 2, 1]);
    console.log(l.head.flatten());
  }
});
