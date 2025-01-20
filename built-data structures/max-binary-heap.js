class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  extractMax() {
    const max = this.heap[0];
    const lastElement = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.bubbleDown();
    }
    return max;
  }
  // percolate up or bubble up
  bubbleUp() {
    let newValueIndex = this.heap.length - 1;
    let newValue = this.heap[newValueIndex];
    while (newValueIndex > 0) {
      let parentIndex = Math.floor((newValueIndex - 1) / 2);
      let parent = this.heap[parentIndex];
      if (newValue > parent) {
        [this.heap[parentIndex], this.heap[newValueIndex]] = [
          this.heap[newValueIndex],
          this.heap[parentIndex],
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
    const length = this.heap.length;
    const element = this.heap[0];

    while (idx < length) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(100)

console.log(heap);
