var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line
  
  this.root = new Node();

  this.add = function(word) {

    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (node.keys.get(word[i]) == null) {
        const n = new Node();
        node.keys.set(word[i], n);
      }

      const n = node.keys.get(word[i])

      if (i === word.length - 1) {
        n.setEnd();
      }

      node.keys.set(word[i], n);

      node = node.keys.get(word[i]);
    }

  };

  this.print = function() {
    
    const words = [];

    function traverse(root, wordStem) {
      
      if (root.keys.size !== 0) {
        for (let key of root.keys.keys()) {
          traverse(root.keys.get(key), wordStem + key);
        }
      }

      if (root.isEnd()) {
        words.push(wordStem);
      }

    };

    traverse(this.root, "");

    return words;
  };

  this.isWord = function(word) {
    
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (node != null) {
        node = node.keys.get(word[i]);
      } else {
        return false;
      }
    }

    return node !== null && node.isEnd();
  };

  // Only change code above this line
};