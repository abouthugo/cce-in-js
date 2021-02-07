/**
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example:
 *
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 * Find the problem at: https://leetcode.com/problems/plus-one/
 */

/**
 * My solution basically loops backward in the array and adds a one to all the digits <=8 and breaks the loop
 * When a 9 is found at the index the value is turned to zero and the loop continues and also checks if the beginning of the array has been hit.
 * @param digits
 */
export function mySolution(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] <= 8) {
      digits[i]++;
      break;
    } else {
      // found a nine
      digits[i] = 0;
      // if we hit the end of the array and there is a nine we need to add a 1 at the beginning of the array
      if (i === 0) {
        // This is what I initially had
        // digits = [1, ...digits];
        // But this is 8ms faster and performs the same operation
        digits.unshift(1);
      }
    }
  }
  return digits;
}
