class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class PalindromicLinkedList {
  isPlaindrome(head) {
    if (head === null || head.next === null) return true;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    let headSecondHalf = this.reverse(slow); // reverse the second half

    let copyHeadSecondHalf = headSecondHalf; // store the head of the reversed part to revert back to original

    // compare the first and the second half part of the Linked List
    while (head !== null && headSecondHalf !== null) {
      if (head.value !== headSecondHalf.value) {
        break; // not a plaindrome
      } else {
        head = head.next;
        headSecondHalf = headSecondHalf.next;
      }
    }

    this.reverse(copyHeadSecondHalf); // revert the reverse of the second half.

    if (head === null || headSecondHalf === null) {
      return true;
    } else {
      return false;
    }
  }

  reverse(node) {
    let prev = null;
    let after;
    while (node !== null) {
      after = node.next;
      node.next = prev;
      prev = node;
      node = after;
    }
    return prev;
  }
}

let head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(2);

let list = new PalindromicLinkedList();

console.log("Is Palindrome", list.isPlaindrome(head));

head.next.next.next.next.next = new ListNode(2);
console.log("Is Palindrome", list.isPlaindrome(head));
