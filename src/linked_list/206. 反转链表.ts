// 206. 反转链表
// 简单
// https://leetcode.cn/problems/reverse-linked-list/description/
// 迭代
function reverseList(head: ListNode | null): ListNode | null {
    let tmpHead: ListNode | null = new ListNode(0)
    let p: ListNode | null = head

    while(p) {
        let tmp = p.next
        p.next = tmpHead.next
        tmpHead.next = p
        p = tmp
    }
    return tmpHead.next
};

// 递归
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
      return head
  }

  let node = reverseList(head.next)
  head.next.next = head
  head.next = null

  return node
};