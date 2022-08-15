function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  this.enqueue = function(element) {
    const newArray = new Array(collection.length + 1);

    for(let i = 0; i < collection.length; i++) {
      newArray[i + 1] = collection[i];
    }

    newArray[0] = element;

    collection = newArray;
  };

  this.dequeue = function() {
    const newArray = new Array(collection.length - 1);

    for(let i = 0; i < newArray.length; i++) {
      newArray[i] = collection[i];
    }

    const lastElement = collection[collection.length - 1];

    collection = newArray;

    return lastElement;
  };

  this.front = function() {
    return collection[collection.length - 1];
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };

  // Only change code above this line
}