// 563. 二叉树的坡度
// 简单
// https://leetcode.cn/problems/binary-tree-tilt/
import TreeNode from "./TreeNode";

let totalTilt = 0

function findTilt(root: TreeNode | null): number {
  totalTilt = 0
  reduceNode(root)
  return totalTilt
};

// 计算树上所有节点的和
function reduceNode(root: TreeNode | null): number {
  if (root === null) return 0
  const leftTotal = reduceNode(root.left)
  const rightTotal = reduceNode(root.right)
  const tilt = Math.abs(leftTotal - rightTotal)
  totalTilt += tilt
  return leftTotal + rightTotal + root.val
}
