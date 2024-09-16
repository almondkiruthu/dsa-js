class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let prevNode = this.tail.prev;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prevNode;
      prevNode.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let removedNode = this.head;
      let newNode = removedNode.next;
      this.head = newNode;
      newNode.prev = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  unshift(value) {
    let newNode = new Node(value);
    let prevHead = this.head;
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      newNode.next = prevHead;
      prevHead.prev = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    let count = 0;
    let currentNode = this.head;
    if (index <= this.length / 2) {
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode !== null || foundNode !== undefined) {
      foundNode.value = value;
      return true;
    } else {
      return false;
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);

    let nextNode = this.get(index);
    let prevNode = nextNode.prev;

    (prevNode.next = newNode), (newNode.prev = prevNode);
    (newNode.next = nextNode), (nextNode.prev = newNode);

    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let nextNode = removedNode.next;
    let prevNode = removedNode.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");

console.log(list.unshift("Porter"));
