var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  
  this.levelOrder = function() {

    if (this.root === null) {
      return null;
    }

    const queue = [];

    let node = this.root;

    const nodes = [];

    while (node != null) {
    
      nodes.push(node.value);

      if (node.left !== null) {
        queue.unshift(node.left);
      }

      if (node.right !== null) {
        queue.unshift(node.right);
      }

      node = queue.pop();
    }

    return nodes;
  };

  this.reverseLevelOrder = function() {

    if (this.root === null) {
      return null;
    }

    const queue = [];

    let node = this.root;

    const nodes = [];

    while (node != null) {
    
      nodes.push(node.value);

      if (node.right !== null) {
        queue.unshift(node.right);
      }

      if (node.left !== null) {
        queue.unshift(node.left);
      }

      node = queue.pop();
    }

    return nodes;
  };

  // Only change code above this line
}