// 136. 只出现一次的数字
// 简单
// https://leetcode.cn/problems/single-number/description/?favorite=2cktkvj
function singleNumber(nums: number[]): number {
  return nums.reduce((pre, cur) => {
    return pre ^ cur;
  });
}
