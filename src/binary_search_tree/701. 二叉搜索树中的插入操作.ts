// 701. 二叉搜索树中的插入操作
// 中等
// https://leetcode.cn/problems/insert-into-a-binary-search-tree/description/
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) { return new TreeNode(val) }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val)
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val)
  }
  return root
};