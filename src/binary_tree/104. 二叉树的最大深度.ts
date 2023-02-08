// 104. 二叉树的最大深度
// 简单
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
import TreeNode from './TreeNode'
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  let leftMaxDepth = maxDepth(root.left)
  let rightMaxDepth = maxDepth(root.right)
  return Math.max(leftMaxDepth, rightMaxDepth) + 1
};


// 遍历
let curDepth = 0
let res = 0

function maxDepth1(root: TreeNode | null): number {
  travel(root)
  return res
};

function travel(root: TreeNode | null) {
  if (root === null) return
  curDepth++
  if (root.left === null && root.right === null) {
    res = Math.max(res, curDepth)
  }
  travel(root.left)
  travel(root.right)
  curDepth--
}
