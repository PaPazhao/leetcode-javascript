// 105. 从前序与中序遍历序列构造二叉树
// 中等
// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

import TreeNode from "./TreeNode"
const valToIndex = new Map<number, number>()
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    inorder.forEach((value, index) => valToIndex.set(value, index))
    const len = preorder.length
    return build(preorder, 0, len - 1, inorder, 0, len - 1)
};

function build(
    preorder: number[],
    pStart: number,
    pEnd: number,
    inorder: number[],
    iStart: number,
    iEnd: number
) {
    if(pStart > pEnd || iStart > iEnd) {
        return null
    }
    // 前序遍历第一个节点就是根节点
    const rootVal = preorder[pStart]
    // 中序遍历找到这个 root
    let index = valToIndex.get(rootVal)
 

    const root = new TreeNode(rootVal)
    const leftSize = index - iStart
    root.left = build(preorder, pStart + 1, pStart + leftSize, inorder, iStart, index - 1)
    root.right = build(preorder, pStart + leftSize + 1, pEnd, inorder, index + 1, iEnd)

    return root
}