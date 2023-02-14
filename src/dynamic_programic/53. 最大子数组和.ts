// 53. 最大子数组和
// 中等
// https://leetcode.cn/problems/maximum-subarray/?envType=study-plan&id=shu-ju-jie-gou-ru-men&plan=data-structures&plan_progress=jnfgan7
function maxSubArray(nums: number[]): number {
  let left = 0,
    right = 0,
    winSum = 0,
    maxSum = Number.MIN_SAFE_INTEGER;

  while (right < nums.length) {
    winSum += nums[right];
    right++;

    maxSum = winSum > maxSum ? winSum : maxSum;

    while (winSum < 0) {
      winSum -= nums[left];
      left++;
    }
  }
  return maxSum;
}
