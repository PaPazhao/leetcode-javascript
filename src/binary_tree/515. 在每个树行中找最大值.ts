// 515. 在每个树行中找最大值
// 中等
// https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/?show=1

import TreeNode from "./TreeNode"

function largestValues(root: TreeNode | null): number[] {
  if(root === null) return []
  let queue = [root]
  let res: number[] = []
  let ans = 0
  while(queue.length) {
      ans = queue[0].val
      let next: TreeNode[] = []
      for(const node of queue) {
          ans = Math.max(ans, node.val)
          if(node.left) {
              next.push(node.left)
          }
          if(node.right) {
              next.push(node.right)
          }
      }
      res.push(ans)
      queue = next
  }
  return res
};