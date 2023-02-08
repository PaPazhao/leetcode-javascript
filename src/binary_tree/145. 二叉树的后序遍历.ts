// 145. 二叉树的后序遍历
// 简单
// https://leetcode.cn/problems/binary-tree-postorder-traversal/
import TreeNode from "./TreeNode"

function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return []
  return postorderTraversal(root.left)
      .concat(postorderTraversal(root.right))
      .concat([root.val])
};