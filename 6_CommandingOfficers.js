const BinarySearchTree = require('./Helpers/BinarySearchTree');

function main(){
  const BST = new BinarySearchTree(5, "Captain Picard");

  const officers = [
    [3, "Commander Riker"],
    [6, "Commander Data"],
    [2, "Lt. Cmdr. Worf"],
    [4, "Lt. Cmdr. LaForge"],
    [8, "Lt. Cmdr. Crusher"],
    [1, "Lieutenant Security-Officer"],
    [7, "Lieutenant Selar"]
  ]

  officers.forEach(o => {
    BST.insert(o[0], o[1]);
  })

  console.log(BST.orderOfCommand(BST));
}

main();
// Top to bottom, left to right =>
// - Picard, Riker, Data, Worf, LaForge, Crusher, Security-Officer, Selar
