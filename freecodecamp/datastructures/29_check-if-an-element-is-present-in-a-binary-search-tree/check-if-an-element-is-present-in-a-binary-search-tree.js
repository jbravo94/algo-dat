var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  
  this.isPresent = function(integer) {
    
    let node = this.root;

    while(node !== null) {
      if (node.value > integer) {
        node = node.left;
      } else if (node.value < integer) {
        node = node.right;
      } else {
        return true;
      }
    };
    
    return false;
  };

  // Only change code above this line
}