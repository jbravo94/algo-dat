var MaxHeap = function () {
  this.heap = [];
  this.parent = index => {
    return Math.floor((index - 1) / 2);
  }
  this.insert = element => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }
  this.heapifyUp = index => {
    let currentIndex = index,
    parentIndex = this.parent(currentIndex);
    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  this.print = () => {
    return this.heap;
  }
  // Only change code below this line

  this.remove = function() {

    const maxValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let index = 0;

    while (index < this.heap.length && (this.heap[this.getLeftChild(index)] > this.heap[index] || this.heap[this.getRightChild(index)] > this.heap[index])) {
      
      const val = this.heap[index];

      if (this.heap[this.getRightChild(index)] > val) {

        this.heap[index] = this.heap[this.getRightChild(index)];
        this.heap[this.getRightChild(index)] = val;
        index = this.getRightChild(index);

      } else if (this.heap[this.getLeftChild(index)] > val) {

        this.heap[index] = this.heap[this.getLeftChild(index)];
        this.heap[this.getLeftChild(index)] = val;
        index = this.getLeftChild(index);

      } else {
        break;
      }

    }

    return maxValue;
  }

  this.getLeftChild = function(index) {
    return index * 2 + 1;
  };

  this.getRightChild = function(index) {
    return index * 2 + 2;
  };

  // Only change code above this line
};