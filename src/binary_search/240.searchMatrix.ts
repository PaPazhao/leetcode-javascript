// 240. 搜索二维矩阵 II
// 中等
// https://leetcode.cn/problems/search-a-2d-matrix-ii/
function searchMatrix(matrix: number[][], target: number): boolean {
  let y = 0
  let x = matrix[0].length - 1

  while (x >= 0 && y < matrix.length) {
      const value = matrix[y][x]
      if (target === value) {
          return true
      }
      if (target > value) {
          y++ 
          continue
      }
      if(target < value) {
          x--
          continue
      }
  }
  return false
};