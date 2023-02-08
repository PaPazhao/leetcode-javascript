// 543. 二叉树的直径
// 简单
// https://leetcode.cn/problems/diameter-of-binary-tree/
import TreeNode from './TreeNode'

let res = 0
function diameterOfBinaryTree(root: TreeNode | null): number {
  maxDepth(root)
  return res
};

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  const leftMaxDepth = maxDepth(root.left)
  const rightMaxDepth = maxDepth(root.right)
  res = Math.max(leftMaxDepth + rightMaxDepth, res)
  return Math.max(leftMaxDepth, rightMaxDepth) + 1
}

const root = new TreeNode(1, new TreeNode(2))
diameterOfBinaryTree(root)
console.log(res)