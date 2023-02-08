// 513. 找树左下角的值
// 中等
// https://leetcode.cn/problems/find-bottom-left-tree-value/description/
import TreeNode from "./TreeNode"

function findBottomLeftValue(root: TreeNode | null): number {
  let queue = [root], ans = 0
  while (queue.length) {
      ans = queue[0].val
      const next: TreeNode[] = []
      for (const node of queue) {
          if (node.left) {
              next.push(node.left)
          }
          if (node.right) {
              next.push(node.right)
          }
      }
      queue = next
  }
  return ans
};