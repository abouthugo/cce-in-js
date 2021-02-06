/**
 * Recursive method for the searching insert position problem
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function searchInsert(nums: number[], target: number): number {
  return helper(nums, target, 0);

  function helper(n: number[], t: number, offset: number): number {
    const mid = Math.floor(n.length / 2);
    if (n[mid] === undefined) return offset;

    if (n[mid] === t) return offset + mid;
    if (n[mid] > t) {
      // look to the left
      return helper(n.slice(0, mid), t, offset);
    } else {
      return helper(n.slice(mid + 1), t, offset + mid + 1);
    }
  }
}

/**
 * An optimal method using high and low pointers
 * @param nums
 * @param target
 */
export function searchInsert2(nums: number[], target: number): number {
  let high = nums.length - 1;
  let low = 0;
  let mid;

  while (high > low) {
    mid = Math.ceil((high + low) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return low;
}
