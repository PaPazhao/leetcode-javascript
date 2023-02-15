// 61. 旋转链表
// 中等
// https://leetcode.cn/problems/rotate-list/description/


function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null || k === 0) { return head }

  let left: ListNode | null = head, right: ListNode | null = head
  let len = 1

  while (left.next) {
    len++
    left = left!.next
  }

  let tail = left
  if (k % len === 0) { return head }
  let step = (len - k % len - 1) % len
  left = head

  for (let i = 0; i < step; i++) {
    left = left!.next
  }
  const res = left!.next
  left!.next = null
  tail!.next = head
  return res
};