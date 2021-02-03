export default class StringBuilder {
  private words: string[];
  private _capacity: number;

  constructor(charSequence = "", capacity = 16) {
    this.words = [];
    if (charSequence.length > 0) {
      this.append(charSequence);
    }
    this._capacity = capacity;
  }

  /**
   * Appends the given string to the end of the array
   * @param charSequence
   */
  append(charSequence: string): void {
    for (const s of charSequence) {
      if (this.words.length < this._capacity) {
        this.words.push(s);
      }
    }
  }

  /**
   * Returns the capacity of this string builder
   */
  capacity(): number {
    return this._capacity;
  }

  /**
   * Returns the character at the specified index
   * @param index
   */
  charAt(index: number): string | boolean {
    if (this.words.length > index && index < this._capacity) {
      return this.words[index];
    }
    return false;
  }

  /**
   * Removes the characters between start and end indices. Exclusive on end.
   * @param start
   * @param end
   */
  delete(start: number, end: number): void {
    if (start >= 0 && end < this._capacity && end > start) {
      this.words.splice(start, end - start);
    }
  }

  /**
   * Returns the starting index of the given string
   *
   * -1 when it is not present
   * @param str
   */
  indexOf(str: string): number {
    let str_index = 0;
    let char_index = 0;
    for (char_index; char_index < this.words.length; char_index++) {
      if (this.words.length - char_index > str.length - str_index) {
        // Early termination
        return -1;
      }

      // TODO: finish writing this function
      if (this.words[char_index] === str[str_index]) {
        str_index++;
      } else if (str_index > 0) {
        str_index = 0;
      }
    }
  }

  /**
   * Returns
   */
  toString(): string {
    let sentence = "";
    for (const word of this.words) {
      sentence += word;
    }
    return sentence;
  }

  /**
   * Returns the character count
   */
  length(): number {
    return this.words.length;
  }
}

const test = new StringBuilder("hello world", 16);
test.append("yo");
console.log(test.capacity());
