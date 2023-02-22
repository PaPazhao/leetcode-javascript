// 912. 排序数组
// 中等
// https://leetcode.cn/problems/sort-an-array/description/
function sortArray(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }
  sort(nums, 0, nums.length - 1);
  return nums;
}

function sort(nums: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }
  const p = partion(nums, lo, hi);

  sort(nums, lo, p - 1);
  sort(nums, p + 1, hi);
}

function partion(nums: number[], lo: number, hi: number): number {
  let left = lo,
    right = hi;
  let base = nums[left];

  while (left < right) {
    while (nums[right] >= base && left < right) {
      right--;
    }

    if (left < right) {
      nums[left++] = nums[right];
    }

    while (nums[left] <= base && left < right) {
      left++;
    }

    if (left < right) {
      nums[right--] = nums[left];
    }
  }

  nums[right] = base;
  return left;
}
