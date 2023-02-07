// 162. 寻找峰值
// 中等
// https://leetcode.cn/problems/find-peak-element/
function findPeakElement(nums: number[]): number {
  let left = 0
  let right = nums.length - 1

  while(left < right) {
      let mid = Math.floor((left + right) / 2) 
      if(nums[mid] < nums[mid + 1]) {
          left = mid + 1
      } else {
          right = mid
      }
  }
  return left
};