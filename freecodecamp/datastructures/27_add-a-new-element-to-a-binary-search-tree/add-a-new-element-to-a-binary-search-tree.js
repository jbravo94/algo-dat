var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = function(value) {
    
    var node = new Node(value);
    
    if (this.root === null) {
      this.root = node;
      return undefined;
    }

    var n = this.root;

    while(true) {

      if(value === n.value) {
        return null;
      };

      if(value < n.value && n.left === null) {
        n.left = node;
        break;
      };

      if(n.value < value && n.right === null) {
        n.right = node;
        break;
      };

      if(value < n.value) {
        n = n.left;
        continue;
      };

      if(n.value < value) {
        n = n.right;
        continue;
      }
    };

    return undefined;
  };
  // Only change code above this line
}