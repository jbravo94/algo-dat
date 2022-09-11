var MaxHeap = function() {
  // Only change code below this line
  
  const maxHeap = [null];

  this.insert = function(element) {
    maxHeap.push(element);

    let index = maxHeap.length - 1;

    while (index !== 0 && maxHeap[this.getParent(index)] != null && maxHeap[index] > maxHeap[this.getParent(index)]) {
      const tmp = maxHeap[index];

      maxHeap[index] = maxHeap[this.getParent(index)];
      maxHeap[this.getParent(index)] = tmp;
      index = this.getParent(index);
    }
    
  };

  this.getParent = function(index) {
    return Math.floor(index / 2);
  }

  this.print = function() {
    return [...maxHeap]
  };

  // Only change code above this line
};