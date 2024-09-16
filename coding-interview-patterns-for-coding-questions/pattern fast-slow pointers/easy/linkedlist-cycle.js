class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListCycle {
  hasCycle(head) {
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
        return true; // found the cycle
      }
    }

    return false;
  }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next = head.next.next;

let list = new LinkedListCycle();

console.log("The list has a cycle", list.hasCycle(head));
