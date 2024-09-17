class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListCycleStart {
  findCycleStart(head) {
    //Find linkedList Cycle
    let cycleLength = 0;
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
        cycleLength = this.calculateCycleLength(slow);
        break;
      }
    }

    return this.findStart(head, cycleLength);
  }
  calculateCycleLength(slow) {
    let currentNode = slow;
    let cycleLength = 0;
    do {
      currentNode = currentNode.next;
      cycleLength++;
    } while (currentNode !== slow);

    return cycleLength;
  }

  findStart(head, cycleLength) {
    let pointer1 = head;
    let pointer2 = head;

    // move pointer 2 ahead 'K i.e. the length of the cycle nodes' nodes
    while (cycleLength > 0) {
      pointer2 = pointer2.next;
      cycleLength--;
    }

    while (pointer2 !== pointer1) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }

    return pointer1.value;
  }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next = head.next.next;

let list = new LinkedListCycleStart();

console.log(
  "The list has a cycle and it starts from",
  list.findCycleStart(head)
);
