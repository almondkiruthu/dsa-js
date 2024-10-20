class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getList() {
    let result = " ";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

function reverseSubList(head, p, q) {
  if (p === q) {
    return head;
  }
  // skip p - 1 nodes to reach to our pth Node, currentNode variable will point to our p Node
  let currentNode = head;
  let previous = null;
  let i = 0;
  while (currentNode !== null && i < p - 1) {
    previous = currentNode;
    currentNode = currentNode.next;
    i++;
  }

  // we are interested in 3 parts of the LinkedList
  // 1. the part before index p
  // 2. the part between p and q
  // 3. the part after index q
  const LAST_NODE_OF_FIRST_PART = previous;

  // after reversing the LinkedList i.e our sublist 'currentNode' will be the last node of the sub-list
  const LAST_NODE_OF_SUB_LIST = currentNode;

  let next = null;
  let j = 0;

  //reverse nodes between 'p' and 'q'
  while (currentNode !== null && j < q - p + 1) {
    next = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = next;
    j++;
  }

  // connect with the first part
  if (LAST_NODE_OF_FIRST_PART !== null) {
    // 'previous is now the firt part of our sub-list'
    LAST_NODE_OF_FIRST_PART.next = previous;
  } else {
    // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
    head = previous;
  }

  // connecting with the last part
  LAST_NODE_OF_SUB_LIST.next = currentNode;
  return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.getList()}`);
const result = reverseSubList(head, 2, 4);
console.log(`Nodes of reversed LinkedList are: ${result.getList()}`);
