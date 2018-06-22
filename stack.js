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

function is_palindrome(s) {
  let old = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // your code goes here
  const stack = new Stack();
  for (let i = 0; i < old.length; i++) {
    stack.push(old[i]);
  }
  let reversed = '';
  for (let i = 0; i < old.length; i++) {
    reversed += stack.pop();
  }
  if (reversed === old) {
    return true;
  }
  return false;
}

function matchingParens(str) {
  const stack = new Stack();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      count += 1;
      stack.push(str[i])
    }
    if (str[i] === ')') {
      count -= 1;
      stack.pop();
    }
  }
  if (count === 0) {
    return true;
  } else if (count > 0){
    console.log(`Extra open parenthesis at position ${count}`);
    return false;
  } else if (count < 0){
    console.log(`Extra close parenthesis at position ${str.length + count}`);
    return false;
  }
}

function sortStack(stack) {
  // created Stack called sorted
  // pop from stack and save data in variable called saved
  // while sorted isnt empty and sorted.top.data < saved
  // --pop from sorted and push into original stack
  // push saved into sortedStack
  // 4 15 2 13 22
  // 22 15 14 4 2
  const sorted = new Stack();
  while (stack.top) {
    let saved = stack.pop();
    while (sorted.top && sorted.top.data > saved) {
      stack.push(sorted.pop());
    }
    sorted.push(saved);
  }
  while (sorted.top) {
    stack.push(sorted.pop())
  }
  return stack;
}

function main() {
  let test = new Stack();
  test.push(4);
  test.push(12);
  test.push(42);
  test.push(3);
  test.push(1);
  test.push(13);
  test.push(3);
  // let starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // console.log(starTrek);
  // peek(starTrek);
  // display(starTrek);
  // starTrek.pop();
  // starTrek.pop();
  // console.log(
  //   JSON.stringify(
  //     starTrek
  //     , null, 2)
  // );
  // console.log(is_palindrome('dad'));
  // console.log(is_palindrome('A man, a plan, a canal: Panama'));
  // console.log(is_palindrome('1001'));
  // console.log(is_palindrome('Tauhida'));
  // matchingParens('((())))');
  // display(test);
  console.log(
    JSON.stringify(
      test
      , null, 2)
  );
  sortStack(test);
  console.log(
    JSON.stringify(
      test
      , null, 2)
  );
}
main();

exports.STACK = Stack;
exports.NODE = _Node;