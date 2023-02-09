// 98. 验证二叉搜索树
// 中等
// https://leetcode.cn/problems/validate-binary-search-tree/description/
function isValidBST(root: TreeNode | null): boolean {
  function isValidBST(root: TreeNode | null, min: TreeNode | null, max: TreeNode | null) {
      if (root === null) { return true }
      if (min && (min.val >= root.val)) { return false }
      if (max && (max.val <= root.val)) { return false }

      return isValidBST(root.left, min, root) && isValidBST(root.right, root, max)
  }
  return isValidBST(root, null, null)
};