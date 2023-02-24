// 445. 两数相加 II
// 中等
// https://leetcode.cn/problems/add-two-numbers-ii/description/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const stack1: number[] = []
    const stack2: number[] = []
    const pushValues = (list: ListNode | null, stack: number[]) => {
        while (list) {
            stack.push(list.val)
            list = list.next
        }
    }

    pushValues(l1, stack1)
    pushValues(l2, stack2)
    let curry = 0
    const dummyHead = new ListNode(0)
    while (stack1.length || stack2.length | curry) {
        let total = curry
        if (stack1.length) {
            total += stack1.pop()
        }
        if (stack2.length) {
            total += stack2.pop()
        }
        curry = total > 9 ? 1 : 0
        const node = new ListNode(total % 10, dummyHead.next)
        dummyHead.next = node
    }
    return dummyHead.next
};