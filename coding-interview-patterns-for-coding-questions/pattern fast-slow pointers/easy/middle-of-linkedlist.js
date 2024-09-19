class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MiddleOfLinkedList {
  findMiddle(head) {
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

let list = new MiddleOfLinkedList();
let list2 = new MiddleOfLinkedList();

console.log("The list middle point is", list.findMiddle(head).value);
console.log("The list middle point is", list2.findMiddle(head2).value);
