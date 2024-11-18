/*
 
 -----------Array forEach-------------- 
 Description: The `forEach` method is an array prototype method that takes a 
 callback function (a function passed as an argument to another function) 
 and executes it once for each array element in the original order. It is 
 typically used to perform operations on each array element, but it does 
 not return any value (returns `undefined`).

 The `forEach` method can modify the array, but it is not intended to produce a new array 
 like `map` or `filter`. Its primary purpose is to execute side effects such as 
 mutating elements or performing logging for each item.

*/

// Actual forEach usage

const arr = [1, 2, 3, 4, 5, 90, 12, 212, 31];
const arr2 = [];
let res = arr.forEach((item, index) => {
   // Set each element in `arr` to 0
   arr[index] = 0;
   // Push the original `item` to `arr2`
   arr2.push(item);
});

console.log(arr);     // Outputs [0, 0, 0, 0, 0, 0, 0, 0, 0], array modified by setting each item to 0
console.log(arr2);    // Outputs original elements [1, 2, 3, 4, 5, 90, 12, 212, 31] pushed to `arr2`
console.log(res);     // Outputs `undefined` because `forEach` does not return any value


/*
 ----------------------Polyfill for forEach---------------------------  

 Implementation approach 

 1) Verify if the `callback` parameter is a function, as `forEach` expects a callback function.
    - If it’s not a function, throw an error to prevent unintended usage.

 2) Use `this` to access the array on which `myForEach` is called, 
    allowing us to iterate over its elements.

 3) Loop through the array using `for`, accessing each element and its index. 

 4) For each iteration, execute the callback function with three arguments: 
    the current item, index, and the entire array (similar to how the native `forEach` works).
  
 5) Since `forEach` does not return anything, we return `undefined` to match the native behavior.
*/


// myForEach polyfill
Array.prototype.myForEach = function(callback) {

    // Step 1: Check if `callback` is a function
    if (typeof callback !== 'function') {
        throw new Error('Expected a callback function, got ' + typeof callback);
    }

    // Step 2: Loop through each item in the array using `this`
    for (let i = 0; i < this.length; i++) {
        // Step 3: Execute the callback function with the item, index, and array
        callback(this[i], i, this);
    }

    // Step 5: Return `undefined` (implicit in JavaScript if no return statement is present)
    return undefined;
};


// Testing `myForEach`
const arr3 = [20, 30, 40, 50, 60];
const arr4 = [];
let res2 = arr3.myForEach((item, index) => {
    // Example processing: set each element in `arr3` to 0
    arr3[index] = 0;
    // Push the original item to `arr4`
    arr4.push(item);
});

console.log("-------------myForEach----------------");
console.log(arr3);  // Outputs [0, 0, 0, 0, 0], showing `arr3` has been modified
console.log(arr4);  // Outputs [20, 30, 40, 50, 60], original elements pushed to `arr4`
console.log(res2);  // Outputs `undefined` because `myForEach` also returns nothing
