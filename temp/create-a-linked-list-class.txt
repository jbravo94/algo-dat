function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line

    if (head === null) {
      head = new Node(element);
      length = 1;
      return;
    }

    var tailNode = head;

    while(tailNode.next !== null) {
      tailNode = tailNode.next;
    }

    tailNode.next = new Node(element);
    length++;

    // Only change code above this line
  };
}