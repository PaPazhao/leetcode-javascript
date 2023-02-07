// 33. 搜索旋转排序数组
// 中等
// https://leetcode.cn/problems/search-in-rotated-sorted-array/
function search(nums: number[], target: number): number {
  if (nums.length === 1) {
      return nums[0] === target ? 0 : -1
  }

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
          return mid
      }
      if (nums[left] <= nums[mid]) {
          //左边是有序的
          if (target >= nums[left] && target <= nums[mid]) {
              right = mid - 1
          } else {
              left = mid + 1
          }
      } else {
          // 右边是有序的
          if (target >= nums[mid] && target <= nums[right]) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      }
  }

  return -1
};