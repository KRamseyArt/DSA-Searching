const BinarySearchTree = require('./Helpers/BinarySearchTree');

function preOrder(bst, list=[]){
  list.push(bst.key);

  if (bst.left){
    preOrder(bst.left, list)
  }
  
  if (bst.right){
    preOrder(bst.right, list)
  }

  return list;
}

function inOrder(bst, list=[]){
  if (bst.left){
    inOrder(bst.left, list);
  }

  list.push(bst.key);
  
  if (bst.right){
    inOrder(bst.right, list);
  }
  
  return list;
}

function postOrder(bst, list=[]){
  if (bst.left){
    postOrder(bst.left, list);
  }

  if (bst.right){
    postOrder(bst.right, list);
  }

  list.push(bst.key);

  return list;
}

function traverse(){
  const BST = new BinarySearchTree();

  let dataset = [
    25, 15, 50, 10, 24,
    35, 70, 4, 12, 18,
    31, 44, 66, 90, 22
  ]

  dataset.forEach(d => {
    BST.insert(d, d);
  })

  console.log(`\nPRE-ORDER: ${preOrder(BST)}`);
  console.log(`\nIN-ORDER: ${inOrder(BST)}`);
  console.log(`\nPOST-ORDER: ${postOrder(BST)}`);
}

traverse();

module.exports = BinarySearchTree;