/**
 * A simple implementation of a Hash Table using an array of linked lists and a hash code function
 */

export default class HashTable {
  table: LinkedList[];
  private limit: number;

  constructor(limit = 100) {
    this.table = [];
    this.limit = limit;
  }

  put(value: any): void {
    const newEntry = new LinkedList(value);
    const index = generateHashCode(value, this.limit);
    if (this.table[index] !== null) {
      let next = this.table[index];
      while (true) {
        if (next.next === null) break;
        next = next.next;
      }
      next.next = newEntry;
    } else {
      this.table[index] = newEntry;
    }
  }

  get(value: any): any {}

  contains(value: any): boolean {}
}

/**
 * Simple implementation of a Linked List
 */
class LinkedList {
  value: any;
  next: null | LinkedList;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Hashes
 * @param limit
 */
function generateHashCode(value: any, limit: number): number {
  return limit + 1;
}
