// 19. 删除链表的倒数第 N 个结点
// 中等
// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/?languageTags=typescript

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let newHead: ListNode | null = new ListNode(0, head);
  let slowNode: ListNode | null = newHead,
      fastNode: ListNode | null = newHead;
  for (let i = 0; i < n; i++) {
      fastNode = fastNode.next;
  }
  while (fastNode.next) {
      fastNode = fastNode.next;
      slowNode = slowNode.next;
  }
  const tmp = slowNode.next
  slowNode.next = slowNode.next.next;
  tmp.next = null;
  return newHead.next;
}; 