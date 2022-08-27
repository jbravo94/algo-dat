var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  
  this.add = function(key, value) {

    var bucket = this.collection[hash(key)];

    if (!bucket) {
      bucket = [];
    }

    bucket.push([key, value]);

    this.collection[hash(key)] = bucket;
  };

  this.remove = function(key) {
    var bucket = this.collection[hash(key)];

    if (!bucket || bucket.length === 0) {
      return;
    }

    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key) {
        bucket.splice(i, 1);
        break;
      }
    }
    
    this.collection[hash(key)] = bucket;
  };

  this.lookup = function(key) {
    var bucket = this.collection[hash(key)];

    if (!bucket || bucket.length === 0) {
      return null;
    }

    for (var i = 0; i < bucket.length; i++) {
      
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return null;
  };

  // Only change code above this line
};