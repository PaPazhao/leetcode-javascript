// 300. 最长递增子序列
// 中等
// https://leetcode.cn/problems/longest-increasing-subsequence/description/
function lengthOfLIS(nums) {
    var dp = Array(nums.length + 1);
    dp[0] = 1;
    var max = 1;
    for (var i = 1; i < nums.length; i++) {
        var num = nums[i];
        var res = 1;
        for (var j = 0; j < i; j++) {
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
