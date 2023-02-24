// 203. 移除链表元素
// 简单
// https://leetcode.cn/problems/remove-linked-list-elements/description/

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const tmpHead = new ListNode(-1, head)
    let p = tmpHead

    while (p && p.next) {
        if (p.next.val === val) {
            p.next = p.next.next
            continue
        }

        p = p.next
    }
    return tmpHead.next
};