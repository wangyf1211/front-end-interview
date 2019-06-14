/**
 * Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head==null||head.next==null)return null;
    let res=head.next,a=head,b=head.next,prev=null;
    while(a!=null&&b!=null){
        a.next=b.next;
        b.next=a;
        if(prev!=null)prev.next=b;
        if(a.next==null)break;
        b=a.next.next;
        prev=a;
        a=a.next;
    }
    return res;
};