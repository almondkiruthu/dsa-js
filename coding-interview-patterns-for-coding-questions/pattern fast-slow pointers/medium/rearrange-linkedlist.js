class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class RearrangeLinkedList {
  reorder(head) {
    if (head === null || head.next === null) return;

    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    // Slow is now pointing to the middle of the linked list
    let headSecondHalf = this.reverse(slow); //reverse the second Half.
    let headFirstHalf = head;

    while (headFirstHalf !== null && headSecondHalf !== null) {
      let temp = headFirstHalf.next;
      headFirstHalf.next = headSecondHalf;
      //update the head of the first half
      headFirstHalf = temp;

      temp = headSecondHalf.next;
      headSecondHalf.next = headFirstHalf;
      headSecondHalf = temp;
    }

    if (headFirstHalf !== null) {
      headFirstHalf.next = null;
    }

    return head;
  }

  reverse(node) {
    let prev = null;
    let next;
    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return prev;
  }
}

let head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(8);
head.next.next.next.next = new ListNode(10);
head.next.next.next.next.next = new ListNode(12);

let list = new RearrangeLinkedList();

console.log(list.reorder(head));

while (head !== null) {
  console.log(head.value);
  head = head.next;
}
