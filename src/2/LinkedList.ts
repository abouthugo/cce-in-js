export default class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  private _length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  /**
   * Inserts the item at the end of the linked list
   * @param d
   */
  insertLast(d: T) {
    if (this.tail !== null) {
      const n = new Node(d);
      this.tail.appendToTail(n);
      this.tail = n;
    } else {
      this.head = new Node(d);
      this.tail = this.head;
    }
    this._length++;
  }

  /**
   * Inserts the item at the beginning of the linked list
   * @param d
   */
  insertFirst(d: T) {
    if (this.head !== null) {
      const n = new Node(d);
      n.appendToTail(this.head);
      this.head = n;
    } else {
      this.head = new Node(d);
      this.tail = this.head;
    }
    this._length++;
  }

  /**
   * Defaults to inserting the item at the end of the linked list
   * @param d
   */
  insert(d: T) {
    this.insertLast(d);
  }

  /**
   * Tries to find the target node and if it encounters it it appends the new item after it.
   * When the target is not found the item is appended at the end of the list
   * @param d
   * @param after
   */
  insertAfter(d: T, after: T) {
    const predecessor = this.contains(after);
    if (predecessor && predecessor.next) {
      const n = new Node(d);
      const target = predecessor.next;
      if (target.next !== null) {
        n.next = target.next;
        target.next = n;
      } else {
        target.next = n;
      }

      this._length++;
    } else {
      this.insertLast(d);
    }
  }

  /**
   * Returns the Node if the value provided is found in the array list, returns null otherwise.
   * @param d
   */
  get(d: T): Node<T> | null {
    const predecessor = this.contains(d);
    if (predecessor && predecessor.next) {
      return predecessor.next;
    }

    return null;
  }

  /**
   * Deletes an item from the array list and re-arranges the list. If the item is not found the
   * linked list suffers no side effects
   * @param d
   */
  delete(d: T) {
    if (this.head && this.tail) {
      const isHead = this.head.data === d;
      const isTail = this.tail.data === d;

      if (isHead) {
        // Early termination easy task
        this.head = this.head.next;
        if (this.length === 2) {
          // 2 -> 1 (delete 2) => 1
          this.tail = this.head;
        }
        this._length--;
        return;
      }

      const predecessor = this.contains(d);
      if (predecessor && predecessor.next) {
        const nextOfTarget = predecessor.next.next;
        if (this._length === 2) {
          // gotta re arrange the tail and the head;
          // 0 -> 1 (delete 1) => 0
          this.head = predecessor;
          this.tail = this.head;
        } else {
          predecessor.next = nextOfTarget;
        }

        if (isTail) {
          this.tail = predecessor;
        }
        this._length--;
      }
    }
  }

  /**
   * Checks if the item exists in the list and returns the previous node if it exists.
   * If the item is not in the list then it returns null;
   */
  contains(d: T): Node<T> | null {
    if (!this.head) return null;
    let n = this.head;
    while (n.next) {
      if (n.next.data === d) {
        return n;
      }
      n = n.next;
    }

    return null;
  }

  /**
   * Returns the length of the array list
   */
  get length() {
    return this._length;
  }

  /**
   * Returns the string representation of the linked list
   */
  toString() {
    const arr = [];
    let n = this.head;
    while (n) {
      arr.push(n.data);
      n = n.next;
    }

    return arr.join(" -> ");
  }
}

/**
 * Basic Node class
 */
class Node<T> {
  next: Node<T> | null;
  data: T;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  appendToTail(next: Node<T>) {
    this.next = next;
  }
}
