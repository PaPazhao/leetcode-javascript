// 74. 搜索二维矩阵
// 中等
// https://leetcode.cn/problems/search-a-2d-matrix/
function searchMatrix(matrix: number[][], target: number): boolean {
  const row = matrix.length
  const col = matrix[0].length
  let left = 0
  let right = row * col - 1

  const getValue = (index: number): number => {
      const r = Math.floor(index / col)
      const c = index % col 
      return matrix[r][c] 
  }
  while(left <= right) {
      let mid = Math.floor((left + right) / 2)
      let midValue = getValue(mid)
       
      if(target === midValue) {
          return true
      }
      if(target > midValue) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }
  return false
};