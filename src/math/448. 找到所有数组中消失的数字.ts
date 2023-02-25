// 448. 找到所有数组中消失的数字
// 简单
// https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/description/?favorite=2cktkvj
function findDisappearedNumbers(nums: number[]): number[] {
  const tmp: number[] = new Array(nums.length + 1)
  tmp.fill(0)
  for(let num of nums) {
      tmp[num] = num
  }
  let res: number[] = []
  for(let i = 1; i < tmp.length; i++) {
      if(tmp[i]) {
          continue
      }
      res.push(i)
  }
  return res
};