const Node = require('./Node');

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    console.log(`\nENQUEUE:`)

    const node = new Node(data);

    if (this.first === null){
      console.log(`\t\tStack is empty - ${data} queued to stack`)
      this.first = node;
    }
    if (this.last){
      this.last.next = node;
    }
    console.log(`\t\t${data} queued into stack`)
    this.last = node;
  }
  dequeue(){
    console.log(`\nDEQUEUE:`)

    if (this.first === null){
      console.log(`\t\tStack is empty`)
      return null;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last){
      console.log(`\t\tLast item in stack removed. Stack is now empty`);
      this.last = null;
    }
    console.log(`\t\t${node.value} dequeued from stack`)
    return node.value;
  }
}

module.exports = Queue;