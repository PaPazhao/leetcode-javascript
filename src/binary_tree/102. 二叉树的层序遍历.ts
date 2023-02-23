// 102. 二叉树的层序遍历
// 中等
// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) { return [] }
    let queue: TreeNode[] = []
    const res: number[][] = []

    queue.push(root)

    while (queue.length) {
        const stepArray: TreeNode[] = []
        const values: number[] = []

        while (queue.length) {
            const node = queue.shift()
            values.push(node.val)
            node.left && stepArray.push(node.left)
            node.right && stepArray.push(node.right)
        }
        res.push(values)
        queue = stepArray
    }
    return res
};