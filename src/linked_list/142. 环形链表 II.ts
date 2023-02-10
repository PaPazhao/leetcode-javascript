// 142. 环形链表 II
// 中等
// https://leetcode.cn/problems/linked-list-cycle-ii/


function detectCycle(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head,
    slow: ListNode | null = head;
  let hasCycle = false
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) {
      hasCycle = true
      break
    }
  }
  if (hasCycle === false) { return null }
  slow = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return slow
};