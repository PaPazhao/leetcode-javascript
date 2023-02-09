// 450. 删除二叉搜索树中的节点
// 中等
// https://leetcode.cn/problems/delete-node-in-a-bst/description/
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) { return null }
  if (root.val === key) {
      // 删除 node 
      if (root.left === null) { return root.right }
      if (root.right === null) { return root.left }
      // 3.左右都有子节点, 右侧找到最小啊的节点
      const minNode = getMin(root.right)
      root.val = minNode.val
      // 删除右子树最小的节点
      root.right = deleteNode(root.right, minNode.val);
  } else if (key > root.val) {
      root.right = deleteNode(root.right, key)
  } else if (key < root.val) {
      root.left = deleteNode(root.left, key)
  }

  return root
};

function getMin(node: TreeNode): TreeNode {
  while (node.left !== null) {
      node = node.left
  }
  console.log(node)
  return node
}