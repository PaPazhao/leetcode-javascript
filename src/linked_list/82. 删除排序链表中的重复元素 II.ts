// 82. 删除排序链表中的重复元素 II
// 中等
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) { return head }
  const headTmp = new ListNode(-1, head)
  let cur = headTmp

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const v = cur.next.val

      while (cur.next && cur.next.val === v) {
        cur.next = cur.next.next
      }

    } else {
      cur = cur.next
    }

  }

  return headTmp.next
};