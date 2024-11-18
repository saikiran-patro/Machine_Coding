function playMusic(path){

    console.log("Song Name : ",this.name,", Size :", this.size)
    console.log('Path is : ',path)
  }
  
  let songDhruva={
  
      name:"Dhruva Dhruva",
      size:'2mb'
  }
  let songOne={

    name:'Who Are you',
    size:'3mb'
  }

 let playDhruva=playMusic.bind(songDhruva,'D:/music/Dhruva') // bind method will give you reference to the function 
 console.log("Play Dhruva song after the button is clicked by the user")
 playDhruva()
 let playOne=playMusic.bind(songOne, 'D:/music/One')
 playOne()


 // My bind 
console.log("------------Mybind------------------")
 Function.prototype.myBind=function(obj,...args){


    let ref=this
    return function(...newArgs){


        ref.call(obj,...args,...newArgs,)
    }
 }

 let newPlayOne=playMusic.myBind(songOne, 'D:/music/One')
 newPlayOne()