function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);
  
  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line
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
    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
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

  this.remove = function() {

    const minValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let index = 0;

    while (index < this.heap.length && (this.heap[this.getLeftChild(index)] < this.heap[index] || this.heap[this.getRightChild(index)] < this.heap[index])) {
      
      const val = this.heap[index];

      if (this.heap[this.getRightChild(index)] < val && this.heap[this.getRightChild(index)] < this.heap[this.getLeftChild(index)]) {

        this.heap[index] = this.heap[this.getRightChild(index)];
        this.heap[this.getRightChild(index)] = val;
        index = this.getRightChild(index);

      } else if (this.heap[this.getLeftChild(index)] < val) {

        this.heap[index] = this.heap[this.getLeftChild(index)];
        this.heap[this.getLeftChild(index)] = val;
        index = this.getLeftChild(index);

      } else {
        break;
      }

    }

    return minValue;
  }

  this.getLeftChild = function(index) {
    return index * 2 + 1;
  };

  this.getRightChild = function(index) {
    return index * 2 + 2;
  };

  this.sort = function() {

    const arr = [];
    
    while(this.heap.length !== 0) {
      arr.push(this.remove());
    }
    
    return arr;
  }

  // Only change code above this line
};