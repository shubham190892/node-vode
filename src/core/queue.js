class Queue {
  items;
  constructor(items) {
    this.items = [];
    for (const i of items) {
      this.items.push(i);
    }
  }

  pushBack(item) {
    this.items.push(item);
  }

  popFront() {
    if (this.isEmpty()) throw new Error('Queue is empty');
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

module.exports = {
  Queue: Queue
};
