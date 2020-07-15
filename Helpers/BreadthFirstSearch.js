const Queue = require('./Queue')

function BreadthFirstSearch(tree, values=[]){
  const queue = new Queue();
  queue.enqueue(tree);

  while (queue.length){
    const node = queue.dequeue();
    values.push(node.value);

    if (node.left){
      queue.enqueue(node.left);
    }
    if (node.right){
      queue.enqueue(node.right);
    }
  }
  return values;
}

module.exports = BreadthFirstSearch;