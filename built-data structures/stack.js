class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    this.size++;

    return this
  }
  pop() {
    if (!this.first) return null;
    const nodeToRemove = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = nodeToRemove.next;
    nodeToRemove.next = null;

    this.size--;
    return nodeToRemove.value;
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


console.log(stack)