// 94. 二叉树的中序遍历
// 简单
// https://leetcode.cn/problems/binary-tree-inorder-traversal/description/

function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return []
    }
    const left = inorderTraversal(root.left)
    const right = inorderTraversal(root.right)

    return left.concat([root.val]).concat(right)
};