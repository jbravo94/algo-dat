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