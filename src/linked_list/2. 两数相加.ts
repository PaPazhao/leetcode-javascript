// 2. 两数相加
// 中等
// https://leetcode.cn/problems/add-two-numbers/description/


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0
  let n1 = l1
  let n2 = l2
  const tmpHead = new ListNode(0)
  let p = tmpHead
  while (n1 || n2 || carry) {
    let left = 0, right = 0
    if (n1) {
      left = n1.val
      n1 = n1.next
    }
    if (n2) {
      right = n2.val
      n2 = n2.next
    }
    const total = left + right + carry

    carry = Math.floor(total / 10)
    let num = total % 10
    const n = new ListNode(num)
    p.next = n
    p = p.next
  }
  return tmpHead.next
};