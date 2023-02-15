// 1. 两数之和
// 简单
// https://leetcode.cn/problems/two-sum/submissions/402733821/?envType=study-plan&id=shu-ju-jie-gou-ru-men&plan=data-structures&plan_progress=jnfgan7
function twoSum(nums: number[], target: number): number[] {
  const numToIndex = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const needs = target - nums[i]
    if (numToIndex.has(needs)) {
      const index = numToIndex.get(needs)
      return [i, index]
    } else {
      numToIndex.set(nums[i], i)
    }
  }

  return []
};