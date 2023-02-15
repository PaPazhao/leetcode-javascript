// 117. 填充每个节点的下一个右侧节点指针 II
// 中等
// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/description/


function connect(root: Node | null): Node | null {
  if (!root) {
    return root
  }
  let stack = [root]

  while (stack.length) {
    const tStack: Node[] = []
    let tNode: Node | null = null
    while (stack.length) {
      const n = stack.shift()
      if (n) {
        if (n.left) tStack.push(n.left)
        if (n.right) tStack.push(n.right)
      }

      if (tNode) {
        tNode.next = n
        tNode = tNode.next
      } else {
        tNode = n
      }
    }
    stack = tStack
  }
  return root
};
