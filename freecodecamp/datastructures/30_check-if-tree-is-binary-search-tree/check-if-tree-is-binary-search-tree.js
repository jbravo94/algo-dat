var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line
  
  let node;

  if (tree.root != null) {
    node = tree.root;
  } else {
    node = tree;
  }

  if (node.right !== null) {
    if (node.right.value >= node.value) {
      if (!isBinarySearchTree(node.right)) {
          return false;
      }
    } else {
      return false;
    }
  }

  if (node.left !== null) {
    if (node.left.value < node.value) {
      if (!isBinarySearchTree(node.left)) {
          return false;
      }
    } else {
      return false;
    }
  }

  return true;

  //console.log(JSON.stringify(tree));

  //if (node.right !== null && )

  // Only change code above this line
}