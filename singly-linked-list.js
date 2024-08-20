class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    //start with the first node
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode === null) {
      this.head = null;
      this.tail = null;
    } else {
      previousNode.next = null;
      this.tail = previousNode;
    }
    this.length--;
    return currentNode;
  }

  //shift
  //unshift
  //get
  //set / modify
  //insert
  //remove
  //reverse
  //print val
}
