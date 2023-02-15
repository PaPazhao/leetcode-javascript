// 234. 回文链表
// 简单
// https://leetcode.cn/problems/palindrome-linked-list/description/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  if (head && head.next === null) { return true }
  let fast = head, slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  if (fast) {
    slow = slow.next
  }

  let reverseHalf = reverse(slow)

  // 比较
  fast = head
  while (reverseHalf && fast) {
    console.log(reverseHalf.val, fast.val)
    if (reverseHalf.val !== fast.val) {
      return false
    }
    reverseHalf = reverseHalf.next
    fast = fast.next
  }
  return true
};



function reverse(head: ListNode): ListNode {
  const tmpHead = new ListNode(0, null)
  let curPoint = head
  while (curPoint) {
    const res = curPoint.next
    curPoint.next = tmpHead.next
    tmpHead.next = curPoint
    curPoint = res
  }
  return tmpHead.next
}