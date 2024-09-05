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
  //insert --- adding a node to the Linked List at a specified postion/index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  //remove --- remove a node from the Linked List at a specified postion/index
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return !!this.pop();
    if (index === 0) return !!this.shift();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
  //reverse --- reverse a linked list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
list.unshift(234);
console.log(list.reverse(), list.print());
