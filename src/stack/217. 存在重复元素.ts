// 217. 存在重复元素
// 简单
// https://leetcode.cn/problems/contains-duplicate/description/?envType=study-plan&id=shu-ju-jie-gou-ru-men&plan=data-structures&plan_progress=jnfgan7

function containsDuplicate(nums: number[]): boolean {
  const numsSet = new Set();
  for (const num of nums) {
    if (numsSet.has(num)) {
      return true;
    }
    numsSet.add(num);
  }
  return false;
}
