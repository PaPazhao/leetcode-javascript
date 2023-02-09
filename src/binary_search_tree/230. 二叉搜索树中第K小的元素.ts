// 230. 二叉搜索树中第K小的元素
// 中等
// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/
let res = 0
let depth = 0
function kthSmallest(root: TreeNode | null, k: number): number {
    depth = 0
    traverse(root, k)
    return res
};

function traverse(root: TreeNode | null, k: number) {
    if (root === null) { return -1 }
    
    traverse(root.left, k)
    depth++
    if(k === depth) {
        res = root.val
        return
    }
    traverse(root.right, k)
}
