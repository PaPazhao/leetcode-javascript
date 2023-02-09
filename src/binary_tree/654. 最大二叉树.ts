// 654. 最大二叉树
// 中等
// https://leetcode.cn/problems/maximum-binary-tree/description/

import TreeNode from "./TreeNode"
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    return build(nums, 0, nums.length - 1)
};

function build(nums: number[], left: number, right: number): TreeNode | null {
    if (left > right) { return null }
    
    let index = left
    let ans = nums[left]
    for(let i = left; i <= right; i++) {
        if(nums[i] > ans) {
            index = i
            ans = nums[i]
        }
    }
  
    const root = new TreeNode(ans)
    root.left = build(nums, left, index - 1)
    root.right = build(nums, index + 1, right)
    return root
}