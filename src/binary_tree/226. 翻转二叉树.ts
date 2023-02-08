// 226. 翻转二叉树
// 简单
// https://leetcode.cn/problems/invert-binary-tree/description/
import TreeNode from "./TreeNode"

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) { return null }
  const leftNode = invertTree(root.left)
  const rightNode = invertTree(root.right)
  root.left = rightNode
  root.right = leftNode
  return root
};