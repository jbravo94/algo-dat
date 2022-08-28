var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  
  this.add = function(data) {

    var node = new Node(data, this.tail);

    if (this.tail !== null) {
      this.tail.next = node;
    }

    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }
  };

  this.remove = function(data) {

    if (this.head === null && this.tail === null) {
      return null;
    }

    var node = this.head;

    while(node != null) {
      if (node.data === data) {
        break;
      } else {
        node = node.next;
      }
    }

    if (this.head === node) {
      this.head = node.next;

      if (node.next !== null) {
        node.next.prev = null;
      }

      return node.data;
    }

    if (this.tail === node) {
      
      this.tail = node.prev;

      if (node.prev !== null) {
        node.prev.next = null;
      }

      return node.data;
    }

    var nextNode = node.next;
    var prevNode = node.prev;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    return node.data;
  };

  // Only change code above this line
};