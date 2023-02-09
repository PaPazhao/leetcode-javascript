// 116. 填充每个节点的下一个右侧节点指针
// 中等
// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/description/
function connect(root: Node | null): Node | null {
  if (root === null) { return null }
  traverse(root.left, root.right)
  return root
};

function traverse(n1: Node | null, n2: Node | null) {
  if(n1 === null || n2 === null) {
      return
  }
  n1.next = n2
  traverse(n1.left, n1.right)
  traverse(n2.left, n2.right)
  traverse(n1.right, n2.left)
}