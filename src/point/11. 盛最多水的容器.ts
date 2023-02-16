// 11. 盛最多水的容器
// 中等
// https://leetcode.cn/problems/container-with-most-water/description/
function maxArea(height: number[]): number {
  let area = (i: number, j: number): number => {
    return Math.min(height[i], height[j]) * (j - i)
  }

  let left = 0, right = height.length - 1
  let max = 0

  while (left !== right) {
    max = Math.max(max, area(left, right))

    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }

  return max
};