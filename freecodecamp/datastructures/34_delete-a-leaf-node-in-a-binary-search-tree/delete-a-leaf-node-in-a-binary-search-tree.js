var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  this.remove = function(value) {
    
    if(this.root === null) {
      return null;
    };

    if (this.root.left === null && this.root.right === null) {
      const node = this.root;
      this.root = null;
      return node;
    }

    let node = this.root;
    let parent;

    while (node.value !== value) {

      parent = node;

      if (node.value > value) {
        node = node.left;
      } else if (node.value < value) {
        node = node.right
      }
      
      if (node === null) {
        return null;
      }

    };

    if (parent.left !== null && parent.left.value === value) {
      parent.left = null;
    } else if (parent.right !== null && parent.right.value === value) {
      parent.right = null;
    }

    return node;
  };
}