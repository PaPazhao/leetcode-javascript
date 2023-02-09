// 700. 二叉搜索树中的搜索
// 简单
// https://leetcode.cn/problems/search-in-a-binary-search-tree/description/
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) { return null }
  if (root.val === val) { return root }
  if (val > root.val) {
    return searchBST(root.right, val)
  }
  if (val < root.val) {
    return searchBST(root.left, val)
  }
  return null
};