// 100. 相同的树
// 简单
// https://leetcode.cn/problems/same-tree/description/?show=1
import TreeNode from './TreeNode'
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(p === null && q === null) {
      return true
  }
  if(p === null || q === null) {
      return false
  }
  if(p.val !== q.val) {
      return false
  }
  
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
