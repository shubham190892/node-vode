class Node {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class ListNode {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DListNode extends ListNode{
  prev;
  constructor(value) {
    super(value);
    this.prev = null;
  }
}

module.exports = {
  Node: Node,
  ListNode: ListNode,
  DListNode: DListNode
};
