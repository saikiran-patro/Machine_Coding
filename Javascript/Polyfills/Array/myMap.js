/*
 
 -----------Array Map--------------
 Description: The `map` method is an array prototype method that takes a 
 callback function and applies it to each element of the array. It creates 
 a new array containing the results of calling the provided callback 
 function on every element in the calling array, without modifying the original array.

 The `map` method is typically used to transform each element of an array 
 based on a specific logic provided in the callback function, and it returns 
 a new array with the transformed values.

*/

// Actual Map usage

const arr = [1, 2, 3, 4, 3, 2, 1];
const resultMap = arr.map((item, index, arr) => item);

console.log(resultMap);     // Outputs [1, 2, 3, 4, 3, 2, 1], as `map` returns a new array based on the callback


/*
 ----------------------Polyfill for map---------------------------  

 Implementation approach 

 1) Define an empty `result` array to store the values returned by executing 
    the callback function on each element in the array.

 2) Use `this` to access the array on which `myMap` is called, allowing us 
    to iterate over its elements.

 3) Loop through the array using `for`, accessing each element and its index.

 4) For each iteration, execute the callback function with three arguments:
    the current item, index, and the entire array (similar to how the native `map` works).
  
 5) Take the result returned by the callback function for each element and 
    push it to the `result` array.

 6) After the loop execution is complete, return the `result` array containing
    the transformed elements.
*/


// myMap polyfill
Array.prototype.myMap = function(cb) {

    // Step 1: Define an empty array to store transformed values
    let result = [];

    // Step 2: Loop through each item in the array using `this`
    for (let i = 0; i < this.length; i++) {
        // Step 3: Execute the callback function on each element and push the result to `result`
        result.push(cb(this[i], i, this));
    }

    // Step 6: Return the `result` array with transformed elements
    return result;
};


// Testing `myMap`
const resultMyMap = arr.myMap((item, index) => item);

console.log(resultMyMap);  // Outputs [1, 2, 3, 4, 3, 2, 1], showing `myMap` works like native `map`
