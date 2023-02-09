// 86. 分隔链表
// 中等
// https://leetcode.cn/problems/partition-list/description/
function partition(head: ListNode | null, x: number): ListNode | null {
  const lo = new ListNode(-1)
  let loTail = lo
  const hi = new ListNode(-1)
  let hiTail = hi

  let p = head
  while(p) {
      if(p.val < x) {
          loTail.next = p
          loTail = loTail.next
      } else {
          hiTail.next = p
          hiTail = hiTail.next
      }
      p = p.next
  }
  loTail.next = hi.next
  hiTail.next = null
  return lo.next
};