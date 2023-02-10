// 876. 链表的中间结点
// 简单
// https://leetcode.cn/problems/middle-of-the-linked-list/description/
function middleNode(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head,
      slow: ListNode | null = head;
  while(fast && fast.next ) {
      fast = fast.next?.next
      slow = slow.next
  }
  return slow
};