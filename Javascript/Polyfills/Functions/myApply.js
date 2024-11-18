function playMusic(path,folder){

    console.log("Song Name : ",this.name,", Size :", this.size)
    console.log('Path is : ',path)
    console.log('Folder is',folder)
  }
  
  let songObject={
  
      name:"Dhruva Dhruva",
      size:'2mb'
  }
  playMusic.apply(songObject,['D:/music','myMusic'])
  
  
  // my call
  console.log("My Apply")
  Function.prototype.myApply=function(obj,args){
    if(typeof this !=='function'){

        throw new Error(this +"It is not Callable")
      }

      if(!Array.isArray(args)){
           throw new TypeError("CreateListFromArrayLike called on non-object. ")
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
  playMusic.myApply(songObject,['D:/music','musicFolder'])
  
  