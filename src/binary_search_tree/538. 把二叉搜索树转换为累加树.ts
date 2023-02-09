// 538. 把二叉搜索树转换为累加树
// 中等
// https://leetcode.cn/problems/convert-bst-to-greater-tree/description/?languageTags=typescript
function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0

  function trverse(root: TreeNode | null): TreeNode | null {
      if (root === null) { return null }
      trverse(root.right)
      sum += root.val
      root.val = sum
      trverse(root.left)

      return root
  }
  trverse(root)
  
  return root
};