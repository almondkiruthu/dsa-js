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

function reverseSubList(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }

  let currentNode = head;
  let previous = null;

  while (true) {
    const LAST_NODE_OF_PREVIOUS_PART = previous;
    // after reversing the LinkedList i.e our sublist 'currentNode' will be the last node of the sub-list
    const LAST_NODE_OF_SUB_LIST = currentNode;
    let next = null;
    let i = 0;

    //reverse 'k' nodes
    while (currentNode !== null && i < k) {
      next = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = next;
      i++;
    }

    // connect with the previous part
    if (LAST_NODE_OF_PREVIOUS_PART !== null) {
      // 'previous is now the firt part of our sub-list'
      LAST_NODE_OF_PREVIOUS_PART.next = previous;
    } else {
      // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
      head = previous;
    }
    // connecting with the next part
    LAST_NODE_OF_SUB_LIST.next = currentNode;

    if (currentNode === null) {
      break;
    }
    previous = LAST_NODE_OF_SUB_LIST;
  }
  return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log(`Nodes of original LinkedList are: ${head.getList()}`);
const result = reverseSubList(head, 3);
console.log(`Nodes of reversed LinkedList are: ${result.getList()}`);
