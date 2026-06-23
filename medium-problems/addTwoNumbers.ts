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


function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {

    // this is the starting point for building answer list
    const dummyNode = new ListNode(0);

    // this will then move through the answer list as nodes are added
    let currentNode = dummyNode;

    // stores the extra values from previous addition
    let carry = 0;

    // this keeps going through both lists until they are both finished 
    // or if there's none left to carry over
    while (true) {

        // if there are no more nodes and no carry, we are done
        if (!l1 && !l2 && carry === 0) {
            break;
        }

        // get the current value from l1, or use 0 if l1 is finished
        const x = l1 ? l1.val : 0;

        // get the current value from l2, or use 0 if l2 is finished
        const y = l2 ? l2.val : 0;

        // add the two values and any carry from the previous calculation
        const sum = x + y + carry;

        // calculate the new carry value
        carry = Math.floor(sum / 10);

        // create a new node with the last digit of the sum
        currentNode.next = new ListNode(sum % 10);

        // then move currentNode to the newly created node
        currentNode = currentNode.next;

        // then move to the next node in l1 if it exists
        if (l1) {
            l1 = l1.next;
        }

        // then move to the next node in l2 if it exists
        if (l2) {
            l2 = l2.next;
        }
    }

    // return the result list
    return dummyNode.next;
}