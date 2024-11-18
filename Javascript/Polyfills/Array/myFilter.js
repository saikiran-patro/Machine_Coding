/*
 
 -----------Array Filter-------------- 
 Descripton : Filter method is Array prototype method which takes a 
 callback(A simple function which passed as an argument to another function is called Callback function)
 and returns the array containing items which are satisfied by executing the callback function.


 

*/

//Actual Filter

const arrForFilter=[1,2,3,4,5,6,7,8]
const evenArrFilter=arrForFilter.filter((item,index)=> item%2===0)
console.log(evenArrFilter)



/*
 ----------------------Polyfil for filter---------------------------  

  Implementaion approach 

  1) check if the callback function is actual function or not 
  2) define an empty array to store the values upon performing the callback function and finally return the result
  3) this pointer refers to how it is being called for normal function so it will have reference to the array which is invoking the filter method
  4) loop over the array since we have this reference and execute the callback function 
  5) if the callback function returns true then store the item to your result array.
  6) After the for loop execution return the result  


  Below is the implementaion of myFilter
*/

// myFilter 
Array.prototype.myFilter=function(cb){

   if(typeof cb!=="function"){
      throw new Error("Expected callback function but got " + typeof cb)

   }

let result=[]  



for(let i=0;i<this.length;i++)
   
   if(cb(this[i],i,this)) result.push(this[i])
   
   return result
}

const evenArrMyFilter=arrForFilter.myFilter((item,index)=>item%2!==0)
console.log(evenArrMyFilter)