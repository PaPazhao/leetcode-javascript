// 445. 两数相加 II
// 中等
// https://leetcode.cn/problems/add-two-numbers-ii/description/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let rl1 = reverse(l1)
    let rl2 = reverse(l2)
    let curry = 0
    const res = new ListNode(0)

    while (rl1 || rl2 || curry) {
        let v1 = 0, v2 = 0

        if (rl1) {
            v1 = rl1.val
            rl1 = rl1.next
        }

        if (rl2) {
            v2 = rl2.val
            rl2 = rl2.next
        }

        const total = curry + v1 + v2
        curry = total > 9 ? 1 : 0
        const node = new ListNode(total % 10, res.next)
        res.next = node
    }
    return res.next
};

function reverse(head: ListNode | null): ListNode | null {
    const tmpHead = new ListNode(-1)
    let p = head

    while (p) {
        const next = p.next
        p.next = tmpHead.next
        tmpHead.next = p
        p = next
    }
    return tmpHead.next
}