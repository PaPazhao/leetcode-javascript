// 剑指 Offer 22. 链表中倒数第k个节点
// 简单
// https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/description/
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let preNode = head
  while(k) {
      preNode = preNode.next
      k--
  }
  let node = head
  while(preNode) {
      preNode = preNode.next
      node = node.next
  }
  return node
};