function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line

  this.isEmpty = function() {
    return this.head() === null;
  };

  this.indexOf = function(element) {

    if (this.isEmpty()) {
      return -1;
    }

    var startNode = this.head();
    
    var count = 0;

    while(startNode !== null) {
      if(startNode.element === element) {
        return count;
      } else {
        startNode = startNode.next;
        count++;
      }
    }

    return -1;
  };

  this.elementAt = function(index) {
    
    if (index >= length) {
      return undefined;
    }

    if (this.isEmpty()) {
      return undefined;
    }

    var startNode = this.head();

    var count = 0;
    
    while(startNode !== null) {
      if(count === index) {
        return startNode.element;
      } else {
        startNode = startNode.next;
        count++;
      }
    }

    if (startNode === null) {
      return undefined;
    }
  };

  // Only change code above this line
}