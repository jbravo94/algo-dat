function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
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
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line
  
  this.removeAt = function(index) {
    if(index < 0 || index >= length) {
      return null;
    }

    var node = this.head();

    if (index === 0) {
      var element = node.element;

      if (node.next === null) {
        head = null;
      } else {
        head = node.next;
      }

      length--;
      return element;
    }
    
    var currentIndex = 0;

    while(node !== null) {
      if (currentIndex === index - 1) {
        break;
      } else {
        node = node.next
        currentIndex++;
      }
    }

    if (node === null || node.next === null) {
      return null;
    }

    var element = node.next.element;
    node.next = node.next.next;
    length--;
    return element;

  };

  // Only change code above this line
}