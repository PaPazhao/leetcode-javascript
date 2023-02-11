// 剑指 Offer 24. 反转链表
// 简单
// https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/?show=1

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let last = reverseList(head.next);
  if (head && head.next) {
    head.next.next = head;
  }
  head.next = null;
  return last;
}
