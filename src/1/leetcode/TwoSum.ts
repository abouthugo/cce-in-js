/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *  -> You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *  -> You can return the answer in any order.
 */

/**
 * This is the brute force method I was able to do on my own.
 * @param nums
 * @param target
 */
export function bruteMethod(
  nums: number[],
  target: number
): number[] | undefined {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (j === i) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

/**
 * I came up with my own JS solution after seeing a similar method being used in C++ in the solutions section
 * @param nums
 * @param target
 */
export function hashmapMethod(
  nums: number[],
  target: number
): number[] | undefined {
  const map = new Map();
  for (let n = 0; n < nums.length; n++) {
    map.set(nums[n], n);
  }

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment) && map.get(compliment) !== i) {
      return [i, map.get(compliment)];
    }
  }
}

/**
 * This is further optimized and very clever.
 * @param nums
 * @param target
 */
export function hashmapOnePassMethod(
  nums: number[],
  target: number
): number[] | undefined {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(nums[i], i);
  }
}
