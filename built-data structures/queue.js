class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let prevNode = this.last;
      this.last = newNode;
      prevNode.next = this.last;
    }
    this.size++;

    return this;
  }
  dequeue() {
    if (!this.first) return null;
    let nodeToRemove = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let newHead = nodeToRemove.next;
      this.first = newHead;
      nodeToRemove.next = null;
    }
    this.size--;

    return nodeToRemove;
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());


console.log(queue)