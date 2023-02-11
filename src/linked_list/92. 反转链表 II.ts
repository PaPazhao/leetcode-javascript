// 92. 反转链表 II
// 中等
// https://leetcode.cn/problems/reverse-linked-list-ii/description/

let p: ListNode | null;
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left === right) {
    return head;
  }
  if (left === 1) {
    p = null;
    return reverse(head, right);
  }
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
}

function reverse(head: ListNode | null, k: number): ListNode | null {
  if (k === 1) {
    p = head.next;
    return head;
  }

  let last = reverse(head.next, k - 1);
  if (head.next) {
    head.next.next = head;
    head.next = p;
  }
  return last;
}
