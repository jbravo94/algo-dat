var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  
  this.findMin = function() {

    if (this.root === null) {
      return null;
    }
    
    let node = this.root;

    while(node.left != null) {
      node = node.left;
    }

    return node.value;
  };

  this.findMax = function() {

    if (this.root === null) {
      return null;
    }

    let node = this.root;

    while(node.right != null) {
      node = node.right;
    }

    return node.value;
  };

  // Only change code above this line
}