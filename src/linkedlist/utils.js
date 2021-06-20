const Node = require('../core/node').ListNode;

function getArrayFromLinkedList(head) {
  let items = [];
  while (head !== null) {
    items.push(head.value);
    head = head.next;
  }
  return items;
}

function getLinkedListFromArray(items) {
  let head, tail;
  head = null;
  if (items.length < 1) return head;
  head = new Node(items[0]);
  tail = head;
  for (let i = 1; i < items.length; ++i) {
    let cur = new Node(items[i]);
    tail.next = cur;
    tail = cur;
  }
  return head;
}

function cloneLinkedList(head) {
  return getLinkedListFromArray(getArrayFromLinkedList(head));
}

module.exports = {
  getArrayFromLinkedList: getArrayFromLinkedList,
  getLinkedListFromArray: getLinkedListFromArray,
  cloneLinkedList: cloneLinkedList
};
