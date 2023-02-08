// 144. 二叉树的前序遍历
// 简单
// https://leetcode.cn/problems/binary-tree-preorder-traversal/
import TreeNode from './TreeNode'
function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return []
  }
  return [root.val]
    .concat(preorderTraversal(root.left))
    .concat(preorderTraversal(root.right))
};