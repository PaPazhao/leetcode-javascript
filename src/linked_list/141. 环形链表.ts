// 141. 环形链表
// 简单
// https://leetcode.cn/problems/linked-list-cycle/description/

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head,
      fast: ListNode | null = head;
  while(fast && fast.next) {
      slow = slow.next
      fast = fast.next.next

      if(fast === slow) {
          return true
      }
  }
  return false
};