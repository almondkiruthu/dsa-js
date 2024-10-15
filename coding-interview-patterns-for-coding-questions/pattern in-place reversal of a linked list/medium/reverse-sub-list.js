class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getList() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + "";
      temp = temp.next;
    }
    return result;
  }
}

function reverseSubList(head, p, q) {
  return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.getList()}`);
