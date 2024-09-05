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

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  //unshift --- add a node from the beginning of the SLL.
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) return undefined;
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }
  //get --- retrieves a node by it's position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  //set/modify --- change value of the node based on it's postion/index in the List
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
    } else {
      return false;
    }
  }
  //insert
  //remove
  //reverse
  //print val
}

var list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
list.unshift(234);
console.log(list.get(4));
