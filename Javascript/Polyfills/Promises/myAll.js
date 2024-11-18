// Promise all 
const promise1= new Promise((resolve,reject) => {

    setTimeout(() =>(resolve("Promise 1 is resolved")),5000)
})

const promise2= new Promise((resolve,reject) => {

    setTimeout(() =>(reject("Promise 2 is resolved")),3000)
})

//Promise.all([promise1, promise2]).then((res) => console.log(...res))

// my all

Promise.myAll = function(arr) {
    let result = [];
    let completedPromises = 0;

    return new Promise((resolve, reject) => {
        arr.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((res) => {
                    result[index] = res;
                    completedPromises += 1;
                    if (completedPromises === arr.length) {
                        resolve(result); // Resolve only when all promises have completed
                    }
                })
                .catch((err) => {
                    reject(err); // Reject immediately if any promise fails
                });
        });

        // Handle empty array case
        if (arr.length === 0) {
            resolve(result);
        }
    });
};


console.log("--------------MyAll---------------")
Promise.myAll([promise1, promise2]).then((res) => console.log(...res)).catch((err) => console.log(err))