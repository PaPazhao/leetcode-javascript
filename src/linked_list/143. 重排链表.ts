// 143. 重排链表
// 中等
// https://leetcode.cn/problems/reorder-list/description/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (head && head.next) {
        const l1 = head
        const l2 = getMiddleNode(head)
        head = merge(l1, reverse(l2))
    }
};

function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
    console.log('待合并: ', left, right)
    const tmpHead: ListNode | null = new ListNode(-1)
    let l = left, r = right
    let p = tmpHead
    while (l && r) {
        p.next = l
        l = l.next
        p = p.next

        p.next = r
        r = r.next
        p = p.next
    }
    if (l) {
        p.next = l
    }
    if (r) {
        p.next = r
    }
    return tmpHead.next
}
function getMiddleNode(head: ListNode | null): ListNode | null {
    const tmpHead: ListNode | null = new ListNode(-1, head)
    let preSlow = tmpHead, slow = head, fast = head
    while (fast && fast.next) {
        slow = slow.next
        preSlow = preSlow!.next
        fast = fast.next.next
    }
    preSlow.next = null
    tmpHead.next = null
    console.log('分割: ', head, slow)
    return slow
}

function reverse(head: ListNode | null): ListNode | null {
    const tmpHead: ListNode | null = new ListNode(-1)
    let p = head

    console.log('翻转列表 0', head)
    while (p) {
        const tmp = p.next
        p.next = tmpHead.next
        tmpHead.next = p
        p = tmp
    }

    console.log('翻转列表', tmpHead.next)
    return tmpHead.next
}