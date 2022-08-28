function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line

  this.addAt = function(index, element) {
    
    if(index < 0 || index >= length) {
      return false;
    }

    var newNode = new Node(element);

    var node = this.head();

    if (index === 0) {
      newNode.next = node;
      head = newNode;
      length++;

      return true;
    }

    var currentIndex = 0;    

    while (node !== null) {
      if (currentIndex === index) {
        break;
      } else {
        node = node.next;
        currentIndex++;
      }
    }

    newNode.next = node.next;

    node.next = newNode;
    length++;
    
    return true;
  };

  // Only change code above this line
}