class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let prevNode = this.tail;
      this.tail = newNode;
      prevNode.next = this.tail;
    }
    this.length++;
  }
  reverse(head) {
    let node = head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    let res = [];
    let current = this.head;
    while (current) {
      res.push(current.value);
      current = current.next;
    }
    return res;
  }
}

const list = new LinkedList();
list.push(2);
list.push(4);
list.push(6);
list.push(8);
list.push(10);

console.log(list.print());
console.log(list.reverse(list.head));
console.log(list.print());
