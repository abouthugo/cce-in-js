/**
 * This implementation is heavily influenced by Oracle's implementation of the String Builder class.
 * All the methods defined in this class were inspired by existing methods in the official docs.
 */
export default class StringBuilder {
  /**
   * An array of single letters. Aka a char array.
   */
  private charSequence: string[];
  private _capacity: number;

  constructor(charSequence = "", capacity = 16) {
    this.charSequence = [];
    if (charSequence.length > 0) {
      for (const c of charSequence) {
        this.append(c);
      }
    }
    this._capacity = capacity;
  }

  /**
   * Appends the given string to the end of the array. However, if the capacity of the array
   * has been reached, the rest of the remaining characters will be ignored.
   * @param charSequence
   */
  append(charSequence: string): void {
    for (const s of charSequence) {
      if (this.charSequence.length < this._capacity) {
        this.charSequence.push(s);
      }
    }
  }

  /**
   * Returns the character at the specified index
   * @param index
   */
  charAt(index: number): string | boolean {
    if (this.charSequence.length > index && index < this._capacity) {
      return this.charSequence[index];
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
      this.charSequence.splice(start, end - start);
    }
  }

  /**
   * Returns the starting index of the given string pattern
   *
   * -1 when it is not present
   * @param str
   */
  indexOf(str: string): number {
    // When the given string pattern is bigger than the StringBuilder itself
    if (str.length > this.capacity()) return -1;
    let str_index = 0;
    let char_index = 0;
    for (char_index; char_index < this.charSequence.length; char_index++) {
      if (str.length - str_index > this.charSequence.length - char_index) {
        /**
         * Early termination case:
         *
         * When the char index has reached a point where it is no longer possible to
         * find the string pattern in the remaining slots in the array.
         */
        return -1;
      }

      if (this.charSequence[char_index] === str[str_index]) {
        str_index++;
        /**
         * When the str_index is as big as the length of the given string pattern we
         * know we have found a match. Thus, we return the pointer of the char sequence
         * minus the pointer of the string pattern provided and account for an extra
         * character since the str pointer is updated earlier in the execution
         * of the program and in this instance particularly
         */
        if (str.length === str_index) return 1 + char_index - str_index;
      } else if (str_index > 0) {
        /**
         * When we had a previous match but it does not follow through
         * we need to reset the second pointer.
         */
        str_index = 0;
      }
    }

    return -1;
  }

  /**
   * Returns the string form of the String Builder
   */
  toString(): string {
    let sentence = "";
    for (const c of this.charSequence) {
      sentence += c;
    }
    return sentence;
  }

  /**
   * Returns the character count
   */
  length(): number {
    return this.charSequence.length;
  }

  /**
   * Returns the capacity of this string builder
   */
  capacity(): number {
    return this._capacity;
  }
}
