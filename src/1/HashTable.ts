/**
 * A simple implementation of a Hash Table using an array of linked lists and an overly simplistic hash function
 */

export default class HashTable {
  table: LinkedList[];
  private limit: number;

  constructor(limit = 100) {
    this.table = [];
    this.limit = limit;
  }

  /**
   * Inserts the given value into the table
   * @param value
   */
  put(key: string, value: any): void {
    // Cannot use the same key twice
    if (typeof this.contains(key) === "number") throw "This key already exists";

    const newEntry = new LinkedList(key, value);
    const index = generateHashCode(key) % this.limit;
    if (this.table[index]) {
      let next = this.table[index];
      while (next.next !== null) {
        next = next.next;
      }
      next.next = newEntry;
    } else {
      this.table[index] = newEntry;
    }
  }

  /**
   * Retrieves the LinkedList node that contains the value specified or undefined if it is not in the table
   * @param key
   */
  get(key: string): any | undefined {
    const index = this.contains(key);
    if (typeof index === "number") {
      if (this.table[index].key === key) return this.table[index].value;
      let next = this.table[index].next;
      while (next) {
        if (next.key === key) return next.value;
        next = next.next;
      }
    }

    return undefined;
  }

  /**
   * Checks if the table has the given value. It returns the index at which
   * the value has been found but if it is not in the table it returns false
   * @param key
   */
  contains(key: string): number | boolean {
    const index = generateHashCode(key) % this.limit;
    // Early termination
    if (this.table[index] === undefined) return false;
    if (this.table[index].key === key) return index;

    let next = this.table[index].next;
    while (next) {
      if (next.key === key) return index;
      next = next.next;
    }

    return false;
  }

  /**
   * A sting representation of this hash table
   */
  toString(): string {
    let str = "";
    for (let i = 0; i < this.table.length; i++) {
      let next = this.table[i].next;
      let row = `${i}\t[${this.table[i].value}]`;
      while (next) {
        row += `-[${next.value}]`;
        next = next.next;
      }
      str += `${row}\n`;
    }
    return str;
  }
}

/**
 * Simple implementation of a Linked List
 */
class LinkedList {
  key: string;
  value: any;
  next: null | LinkedList;

  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

/**
 * A very simplistic method for hashing. I'm so embarrassed about it! Please don't judge me.
 * @param limit
 */
function generateHashCode(key: string): number {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
}
