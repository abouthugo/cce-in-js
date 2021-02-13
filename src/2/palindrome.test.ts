import LinkedList from "./LinkedList";
import { palindromeIterative, palindromeReverse } from "./palindrome";

test("Testing reverse and compare", () => {
  const l = new LinkedList<number>();
  l.insert(1);
  l.insert(2);
  l.insert(3);
  l.insert(4);
  l.insert(3);
  l.insert(2);
  l.insert(1);
  if (l.head) {
    const result = palindromeReverse(l.head);
    expect(result).toBe(true);
  }
});

test("Testing reverse and compare, false case", () => {
  const l = new LinkedList<number>();
  l.insert(1);
  l.insert(2);
  l.insert(3);
  l.insert(4);
  l.insert(2);
  l.insert(1);
  if (l.head) {
    const result = palindromeReverse(l.head);
    expect(result).toBe(false);
  }
});

test("Testing iterative", () => {
  const l = new LinkedList<number>();
  l.insert(1);
  l.insert(2);
  l.insert(3);
  l.insert(4);
  l.insert(3);
  l.insert(2);
  l.insert(1);
  if (l.head) {
    const result = palindromeIterative(l.head);
    expect(result).toBe(true);
  }
});

test("Testing iterative, false case", () => {
  const l = new LinkedList<number>();
  l.insert(1);
  l.insert(2);
  l.insert(3);
  l.insert(4);
  l.insert(2);
  l.insert(1);
  if (l.head) {
    const result = palindromeReverse(l.head);
    expect(result).toBe(false);
  }
});
