class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  dequeue() {
    const min = this.values[0];
    const lastElement = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastElement;
      this.bubbleDown();
    }
    return min;
  }
  // percolate up or bubble up
  bubbleUp() {
    let newValueIndex = this.values.length - 1;
    let newValue = this.values[newValueIndex];
    while (newValueIndex > 0) {
      let parentIndex = Math.floor((newValueIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (newValue.priority < parent.priority) {
        [this.values[parentIndex], this.values[newValueIndex]] = [
          this.values[newValueIndex],
          this.values[parentIndex],
        ];
      } else {
        break;
      }
      newValueIndex = parentIndex;
    }
  }
  // percolate down or bubble down
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (idx < length) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER)

console.log(ER.dequeue())