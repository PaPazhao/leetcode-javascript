// 1019. 链表中的下一个更大节点
// 中等
// https://leetcode.cn/problems/next-greater-node-in-linked-list/description/


function nextLargerNodes(head: ListNode | null): number[] {
    const reversedHead = new ListNode(0)
    let p = head
    let len = 0
    while(p) {
        const next = p.next
        p.next = reversedHead.next
        reversedHead.next = p
        p = next
        len++
    }
    let res = new Array<number>(len)

    p = reversedHead
    let lastNodeValue = p.val
    let i = len - 1
    while(p.next) { 
        const val = p.next.val
        let v = 0
        if(lastNodeValue > val) {
            v = lastNodeValue
        } else if(i !== len - 1) {
            let n = i + 1
            while(n < len - 1) {
                const lastRes = res[n]
                if(lastRes > val) {
                    v = lastRes
                    break
                }
                n++
            }
        }


        lastNodeValue = val
        res[i] = v
        i--
        
        p = p.next
    }
    return res
};