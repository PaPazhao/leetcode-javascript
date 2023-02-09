// 106. 从中序与后序遍历序列构造二叉树
// 中等
// https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
import TreeNode from "./TreeNode"

const valToIndex = new Map<number, number>()
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    inorder.forEach((v, i) => valToIndex.set(v, i))
    return build(
        inorder, 0, inorder.length - 1,
        postorder, 0, postorder.length - 1
    )
};

function build(
    inorder: number[], iStart: number, iEnd,
    postorder: number[], pStart: number, pEnd: number
): TreeNode | null {
    if (iStart > iEnd || pStart > pEnd) { return null }
    const rootVal = postorder[pEnd]
    const index = valToIndex.get(rootVal)
    const root = new TreeNode(rootVal)
    const leftLen = index - iStart
    root.left = build(
        inorder, iStart, index - 1,
        postorder, pStart, pStart + leftLen - 1)

    root.right = build(
        inorder, index + 1, iEnd,
        postorder, pStart + leftLen, pEnd - 1)
    return root
};
