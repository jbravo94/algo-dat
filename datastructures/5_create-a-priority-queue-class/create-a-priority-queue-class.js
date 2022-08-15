/*
 * The MIT License
 * Copyright © 2022 Johannes HEINZL
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line

  this.enqueue = function(element) {
    const priority = element[1];

    const newArray = new Array(this.collection.length + 1);

    if (this.collection.length === 0) {
      newArray[0] = element;
      this.collection = newArray;
      return;
    }

    let elementInserted = false;

    if (priority >= this.collection[0][1]) {
      newArray[0] = element;
      elementInserted = true;
    }

    for(let i = 0; i < this.collection.length; i++) {
      if (elementInserted) {
        newArray[i + 1] = this.collection[i];
      } else {

        if (priority === this.collection[i][1]) {
          newArray[i] = element;
          newArray[i + 1] = this.collection[i];
          elementInserted = true;
        } else {
            newArray[i] = this.collection[i];
        }
      } 
    }

    if (!elementInserted) {
      newArray[newArray.length - 1] = element;
    }

    this.collection = newArray;
  };

  this.dequeue = function() {
    const newArray = new Array(this.collection.length - 1);

    for(let i = 0; i < newArray.length; i++) {
      newArray[i] = this.collection[i];
    }

    const lastElement = this.collection[this.collection.length - 1];

    this.collection = newArray;

    return lastElement[0];
  };

  this.size = function() {
    return this.collection.length;
  };

  this.front = function() {
    return this.collection[this.collection.length - 1][0];
  };

  this.isEmpty = function() {
    return this.collection.length === 0;
  };

  // Only change code above this line
}