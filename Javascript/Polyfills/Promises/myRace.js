// Promise.race

const promise1= new Promise((resolve,reject) => {

    setTimeout(() =>(reject("Promise 1 is rejected")),0)
})

const promise2= new Promise((resolve,reject) => {

    setTimeout(() =>(reject("Promise 2 is rejected")),3000)
})


//Promise.race([promise1, promise2]).then((res)=> console.log(res)).catch((err)=> console.log(err))

Promise.myRace=function(arr)
{

   return new Promise((resolve,reject) =>{
  
     for(let i=0; i<arr.length; i++){

        Promise.resolve(arr[i]).then((res)=> resolve(res),(e)=>reject(e))
     }

   })




}

console.log("-------------MyRace--------------")
Promise.myRace([promise1,10, promise2]).then((res)=> console.log(res)).catch((err)=> console.log(err))
