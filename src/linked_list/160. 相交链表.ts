// 160. 相交链表
// 简单
// https://leetcode.cn/problems/intersection-of-two-linked-lists/description/


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let l: ListNode | null = headA,
    r: ListNode | null = headB;

  while (l !== r) {
    if (l === null) {
      l = headB
    } else {
      l = l.next
    }
    if (r === null) {
      r = headA
    } else {
      r = r.next
    }
  }

  return l
};