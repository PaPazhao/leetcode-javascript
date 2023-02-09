// 114. 二叉树展开为链表
// 中等
// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
import TreeNode from "./TreeNode"

function flatten(root: TreeNode | null): void {
  if (root === null) { return }
  flatten(root.left)
  flatten(root.right)
  let left = root.left
  let right = root.right
  root.left = null
  root.right = left
  let p = root
  while(p.right !== null) {
      p = p.right
  }
  p.right = right
};