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
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {

    // create a dummy node to build the new list
    const dummy = new ListNode(0);

    // current position in the new list
    let current = dummy;

    // loop while both lists still have values
    while (list1 !== null && list2 !== null) {

        // add the smaller value to the new list
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        // move to the next position
        current = current.next;
    }

    // add any remaining values
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // return the merged list
    return dummy.next;
}