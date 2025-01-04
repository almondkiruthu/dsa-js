class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  // percolate up
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
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
