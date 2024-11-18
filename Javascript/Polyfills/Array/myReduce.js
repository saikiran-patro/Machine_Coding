const arrReduce=[1,2,3,4,5,6]
const resultReduce=arrReduce.reduce((acc,item,index)=>{
   acc+=item;
   return acc

},0)
console.log(resultReduce)

// polyfill for reduce

Array.prototype.myReduce=function(cb,acc){
 
   if (typeof cb !== 'function') {
      throw new Error('Expected a callback function, got ' + typeof callback);
  }
   let res
   
   for(let i=0;i<this.length;i++){
      
      if(!res){
        res=cb(acc,this[i],i)
      }
      else{
          res=cb(res,this[i],i)
      }
       
   
   }
   return res;


}

const resultMyReduce=arrReduce.myReduce((acc,item,index)=>{
   acc+=item;
   return acc

},0)
console.log(resultMyReduce)


// Flaterrn array using myReduce
let nestedArray=[1,2,[3,[4,5],6],[7,8,[9,10]]]

function flatArray(nesArray){


let res=nesArray.myReduce((acc,item)=>{
 
  if(item instanceof Array){
     
      acc=[...acc,...flatArray(item)]
   
  }
  else{
     acc.push(item)
  
  }
  
  return acc;


},[])

return res
}
console.log(flatArray(nestedArray))
