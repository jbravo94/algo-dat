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

  this.remove = function(element){
    // Only change code below this line

    if (this.head().element === element) {
      
      head = this.head().next;
      length--;
      return;

    }

    var nodeBeforeTargetNode = this.head();

    while (nodeBeforeTargetNode.next !== null && nodeBeforeTargetNode.next.element !== element) {
      nodeBeforeTargetNode = nodeBeforeTargetNode.next;
    }

    if (nodeBeforeTargetNode.next === null && nodeBeforeTargetNode.element !== element) {
      return;
    }

    if (nodeBeforeTargetNode.next.next === null) {
      nodeBeforeTargetNode.next = null;
    } else {
      nodeBeforeTargetNode.next = nodeBeforeTargetNode.next.next;
    }

    length--;

    // Only change code above this line
  };
}