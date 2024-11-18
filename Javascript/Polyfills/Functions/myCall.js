function playMusic(path){

    console.log("Song Name : ",this.name,", Size :", this.size)
    console.log('Path is : ',path)
  }
  
  let songObject={
  
      name:"Dhruva Dhruva",
      size:'2mb'
  }
  playMusic.call(songObject,'D:/music')
  
  
  // my call
  console.log("-------------My Call----------------")
  Function.prototype.myCall=function(obj,...args){
  
   if(typeof this !=='function'){

     throw new Error(this +"It is not Callable")
   }



     obj = obj || globalThis;
  
     
      const uniqueFnKey = Symbol(); // Using Symbol to ensure the key is unique
      obj[uniqueFnKey] = this;
  
      const result = obj[uniqueFnKey](...args);
  
      // Remove the temporary property
      delete obj[uniqueFnKey];
  
      // Return the result
      return result;
  
  
  }
  playMusic.myCall(songObject,'D:/music')
  
  