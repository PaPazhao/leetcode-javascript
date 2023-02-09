// 21. 合并两个有序链表
// 简单
// https://leetcode.cn/problems/merge-two-sorted-lists/

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let l1 = list1
  let l2 = list2
  const headTemp = new ListNode(-1)
  let p = headTemp
  while(l1 != null && l2 != null) {
      if(l1.val < l2.val) {
          p.next = l1
          l1 = l1.next
      } else {
          p.next = l2
          l2 = l2.next
      }
      p = p.next
  }

  if(l1 != null) {
      p.next = l1 
  }

  if(l2 != null) {
      p.next = l2 
  }

  return headTemp.next
};