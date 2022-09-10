var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  
  this.invert = function() {
    invertNode(this.root);
  };

  function invertNode(node) {
    
    if (node == null) {
      return;
    }

    invertNode(node.left);
    invertNode(node.right);

    const tmp = node.right;
    
    node.right = node.left;
    node.left = tmp;
  }

  // Only change code above this line
}