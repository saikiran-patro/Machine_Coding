// Promise.any

const promise1= new Promise((resolve,reject) => {

    setTimeout(() =>(reject("Promise 1 is resolved")),5000)
})

const promise2= new Promise((resolve,reject) => {

    setTimeout(() =>(reject("Promise 2 is resolved")),3000)
})

//Promise.any([promise1, promise2]).then((res)=> console.log(res)).catch((err)=> console.log(err))


// Promise.myAny polyfil

Promise.myAny=function(arr){

   let errorArr=[]
   let errorCount=0
   return new Promise((resolve,reject)=>{
       for(let i=0;i<arr.length;i++){

         Promise.resolve(arr[i]).then((res)=> resolve(res)).catch((err)=>{
              errorCount++;
              errorArr.push(err)
              if(errorCount===arr.length)
              {
                throw new AssertionError(reject(errorArr))
              }
                    
         
         })
       }  

   })



}
console.log("--------myAny--------")

Promise.myAny([promise1, promise2]).then((res)=> console.log(res)).catch((err)=> console.log(err))