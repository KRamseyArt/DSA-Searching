const Queue = require('./Queue')

class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null){
      // from the top - if node is empty, create root node with provided key/value
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      // if tree exists, compare keys. if provided key is less than current key, work on left-path
      if (this.left == null){
        // set provided key/value if current node has no left child
        this.left = new BinarySearchTree(key, value);
      } else {
        // else recursively compare provided key/value against current node's left child values to determine left/right insertion
        this.left.insert(key, value);
      }
    } else {
      // if tree exists and provided key is >= current key - work on right-child side
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  remove (key) {
    // if key found...
    if (this.key == key) {
      // and key has left & right children...
      if (this.left && this.right){
        // set successor as lowest child value of the right branch
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successory.value;
        // and remove that child from its current position
        successor.remove(successor.key);
      }
      // and key has left child only...
      else if (this.left) {
        // set current node equal to left child
        this._replaceWith(this.left);
      }
      // and key has right child only...
      else if (this.right) {
        this._replaceWith(this.right);
      }
      // and node has no children...
      else {
        this._replaceWith(null);
      }
    } // if key is less than current node, and current node has a left child...
    else if (key < this.key && this.left) {
      // search left child branch recursively
      this.left.remove(key);
    } // if key is greater than current node and current node has right child...'
    else if (key > this.key && this.right) {
      // search right branch recursively
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }
  find(key) {
    // if key is found, return that value
    if (this.key = key) {
      return this.value;
    } // else if key is less than current node and current node has a left child...
    else if (key < this.key && this.left) {
      // search left branch recursively
      return this.left.find(key);
    } // else if key is greater than current node and current node has a right child...
    else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  // -- HELPER FUNCTIONS --
  _replaceWith(node) {
    // if current node has a parent...
    if (this.parent) {
      // is current node the left or right child of that parent?
      if (this == this.parent.left) {
        // if left, replace parent's left child with input node to be replaced with
        this.parent.left = node;
      } else if (this == this.parent.right) {
        // if right, replace parent's right child
        this.parent.right = node;
      }

      if (node) {
        // set provided node's parent equal to parent of current node that was replaced
        node.parent = this.parent;
      }
    } else {
      // else current node has no parent...
      if (node) {
        // if valid node is provided, set as the root
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        // else, root is null
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  _findMin() {
    // if current node has not left child...
    if (!this.left) {
      // left-most (min) value reached - return this
      return this;
    }
    // else if current node has left child, keep searching recursively
    return this.left._findMin();
  }

  // breadth first search
  bfs(values=[]){
    const queue = new Queue();
    queue.enqueue(this);
    while (queue.length){
      const node = queue.dequeue();
      values.push(node.value);
  
      if(node.left){
        queue.enqueue(node.left);
      }
      if(node.right){
        queue.enqueue(node.right);
      }
    }
    return values;
  }

  orderOfCommand(root){
    if(!root.value){
      return []
    }
    
    const queue = new Queue()
    queue.enqueue(root)
    let order = []
    
    while(queue.first){
      let node = queue.dequeue()
      order.push(node.value)

      if(node.left){
        queue.enqueue(node.left)
      }
      if(node.right){
        queue.enqueue(node.right)
      }
    }
    return order
  }
}

module.exports = BinarySearchTree;