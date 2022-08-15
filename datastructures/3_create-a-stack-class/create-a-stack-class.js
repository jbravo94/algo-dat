function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  this.push = function(element) {
    const newArray = new Array(collection.length + 1);

    for(let i = 0; i < collection.length; i++) {
      newArray[i] = collection[i];
    }

    newArray[newArray.length - 1] = element;

    collection = newArray;
  };

  this.pop = function() {
    const newArray = new Array(collection.length - 1);

    for(let i = 0; i < newArray.length; i++) {
      newArray[i] = collection[i];
    }

    const lastElement = collection[collection.length - 1];

    collection = newArray;

    return lastElement;
  };

  this.peek = function() {
    return collection[collection.length - 1];
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };

  this.clear = function() {
    return collection = [];
  };

  // Only change code above this line
}