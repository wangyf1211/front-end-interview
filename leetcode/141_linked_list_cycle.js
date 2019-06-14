/**
 * Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

 
Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
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
 * @return {boolean}
 */
// 使用Set数据结构
var hasCycle = function(head) {
    if(head==null||head.next==null) return false;
    let set=new Set(),flag=false;
    while(head.next){
        if(!set.has(head)){
            set.add(head)
        }else{
            flag=true;
            break;
        }
        head=head.next
    }
    if(flag==true){
        return true;
    }
    return false
    
};
// 使用快慢指针
var hasCycle = function(head) {
    let slow=head,fast=head;
    while(slow&&fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true
        }
    }
    return false
};