var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  
  this.findMinHeight = function() {

    if (this.root === null) {
      return -1;
    }

    let node = this.root;
    node.height = 0;

    const nodes = [];

    let min = -1;

    while (node != null) {
      
      if (node.right === null && node.left === null) {
        if (min === -1 || node.height < min) {
          min = node.height;
        };
        node = nodes.pop();
        continue;
      }
      
      if (node.right !== null) {
        node.right.height = node.height + 1;
        nodes.push(node.right);
      }
      
      if (node.left !== null) {
        node.left.height = node.height + 1;
        nodes.push(node.left);
      }

      node = nodes.pop();
    };

    return min;
  };

  this.findMaxHeight = function() {

    if (this.root === null) {
      return -1;
    }

    let node = this.root;
    node.height = 0;

    const nodes = [];

    let max = -1;

    while (node != null) {
      
      if (node.right === null && node.left === null) {
        if (max === -1 || node.height > max) {
          max = node.height;
        };
        node = nodes.pop();
        continue;
      }

      if (node.right !== null) {
        node.right.height = node.height + 1;
        nodes.push(node.right);
      }

      if (node.left !== null) {
        node.left.height = node.height + 1;
        nodes.push(node.left);
      }

      node = nodes.pop();
    };

    return max;
  };

  this.isBalanced = function() {
    const difference = this.findMaxHeight() - this.findMinHeight();
    
    return difference === 0 || difference === 1;
  };
    
  // Only change code above this line
}