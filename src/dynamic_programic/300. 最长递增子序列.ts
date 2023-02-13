// 300. 最长递增子序列
// 中等
// https://leetcode.cn/problems/longest-increasing-subsequence/description/
function lengthOfLIS(nums: number[]): number {
  let dp = Array<number>(nums.length + 1);
  dp[0] = 1;
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    let res = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] >= num) {
        continue;
      }
      res = Math.max(res, dp[j] + 1);
    }
    dp[i] = res;
    max = Math.max(res, max);
  }

  return max;
}
