var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  
  this.reverse = function() {

    if (this.head === null && this.tail === null) {
      return null;
    }

    var node = this.head;
    this.tail = node;

    var nextNode;
    var prevNode;
    var lastProcessedNode;

    while (node !== null) {
      lastProcessedNode = node;

      nextNode = node.next;
      prevNode = node.prev;

      node.next = prevNode;
      node.prev = nextNode;

      node = nextNode;
    }

    this.head = lastProcessedNode;
  };

  // Only change code above this line
};