import Node from "./Node";

/**
 * O(N^2) , O(1) space
 * @param l1
 * @param l2
 */
export function intersectionBrute(
  l1: Node<number>,
  l2: Node<number>
): Node<number> | null {
  let p1: null | Node<number> = l1;
  while (p1) {
    let p2: null | Node<number> = l2;
    while (p2) {
      if (p1 === p2) {
        return p1;
      }
      p2 = p2.next;
    }
    p1 = p1.next;
  }

  return null;
}

/**
 * O(N) time and space complexity
 * @param l1
 * @param l2
 */
export function intersectionOptimized(
  l1: Node<number>,
  l2: Node<number>
): Node<number> | null {
  const bag = new Map();
  let p1: null | Node<number> = l1;
  let p2: null | Node<number> = l2;
  while (p1) {
    bag.set(p1.data, p1);
    p1 = p1.next;
  }

  while (p2) {
    if (bag.has(p2)) {
      return p2;
    }
    p2 = p2.next;
  }

  return null;
}

/**
 * This solution is based on knowing the length of the lists.
 * Once the length of the lists is know we can chop off part of the list whenever they are not the same size.
 * By doing this we ensure that the lists will be the same size and thus we can begin testing the equality of the nodes
 * to find where the intersection happens.
 * @param l1
 * @param l2
 */
export function bookSolution(
  l1: Node<number>,
  l2: Node<number>
): Node<number> | null {
  const r1 = getTailAndSize(l1);
  const r2 = getTailAndSize(l2);

  if (r1.tail !== r2.tail) return null;
  let shorter: null | Node<number> = r1.length < r2.length ? l1 : l2;
  let longer: null | Node<number> = r1.length < r2.length ? l2 : l1;

  longer = getKthNode(longer, Math.abs(r1.length - r2.length));
  while (longer !== shorter && longer && shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }

  return longer;

  function getTailAndSize(n: Node<number>): Result {
    let p: null | Node<number> = n;
    let tail = n;
    let length = 0;
    while (p) {
      length++;
      tail = p;
      p = p.next;
    }

    return { length, tail };
  }

  function getKthNode(n: Node<number>, k: number): Node<number> | null {
    let answer: null | Node<number> = n;
    while (k > 0 && answer) {
      answer = answer.next;
      k--;
    }
    return answer;
  }
}

interface Result {
  length: number;
  tail: Node<number>;
}
