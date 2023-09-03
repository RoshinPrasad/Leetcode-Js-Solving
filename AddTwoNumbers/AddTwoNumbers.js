function addTwoNumbers(l1, l2) {
    let carry = 0;
    let list = new ListNode(0);
    let head = list;
    let prev = list;

    while (l1 || l2) {
        carry += (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

        list = new ListNode(0);
        list.val = carry % 10;
        carry = Math.floor(carry / 10);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        prev.next = list;
        prev = prev.next;
    }

    if (carry) {
        list = new ListNode(0);
        list.val = carry;
        prev.next = list;
    }

    return head.next;
}


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result = addTwoNumbers(l1, l2);
console.log(result); //  ListNode representing the sum of l1 and l2
