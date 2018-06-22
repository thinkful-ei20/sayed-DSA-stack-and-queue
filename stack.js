class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    if (this.top) {
      this.top = node.next;
      return node.data;
    }
    return;
  }
}

function peek(s) {
  console.log(s.top.data);
}

function display(s) {
  if (!s.top) {
    console.log('Stack is empty');
    return;
  }
  let current = s.top;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(starTrek);
  peek(starTrek);
  display(starTrek);
  starTrek.pop();
  starTrek.pop();
  console.log(
    JSON.stringify(
      starTrek
      , null, 2)
  );
}
main();