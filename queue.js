const {STACK} = require('./stack');

class _Node {
  constructor(value) {
    this.value = value,
    this.prev = null,
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newNode = new _Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    newNode.prev = this.last;
    this.last.next = newNode;
    this.last = newNode;
  }
  dequeue() {
    if (!this.first) {
      return;
    }
    const result = this.first;
    this.first = result.next;
    if (result === this.last) {
      this.last = null;
    }
    return result.value;
  }
}

function peek(q) {
  console.log(q.first.value);
}

function display(q) {
  let current = q.first;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

class StackQueue {
  constructor() {
    this.firstStack = new STACK;
    this.lastStack = new STACK;
  }

  enqueue(val) {
    this.firstStack.push(val)
  }

  dequeue() {
    while (this.firstStack.top) {
      this.lastStack.push(this.firstStack.pop());
    }
    const result = this.lastStack.pop()
    while (this.lastStack.top) {
      this.firstStack.push(this.lastStack.pop())
    }
    console.log(result);
  }
}

function main() {
  const test = new StackQueue();
  test.enqueue('apple');
  test.enqueue('orange');
  test.enqueue('pear');
  test.enqueue('banana');
  test.enqueue('pineapple');
  console.log(
    JSON.stringify(
      test
      , null, 2)
  );
  test.dequeue();
  test.dequeue()
  console.log(
    JSON.stringify(
      test
      , null, 2)
  );

  // const starTrek = new Queue();
  // starTrek.enqueue('Kirk');
  // starTrek.enqueue('Spock');
  // starTrek.enqueue('Uhura');
  // starTrek.enqueue('Sulu');
  // starTrek.enqueue('Checkov');
  // peek(starTrek);
  // display(starTrek);
  // starTrek.dequeue();
  // starTrek.dequeue();
  // display(starTrek);
}
main();