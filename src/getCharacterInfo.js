

export let getCharacterInfo={

















  startNFinish: {
    name:'Start & Finish',
    function:function(a,b,moveList){
      let arr = [];// eslint-disable-next-line
      let regex = new RegExp( "^\\" + a + ".+" + "\\" + b + "\\s$");
      for(let i=0; i<moveList.length; i++){
        if(regex.test(moveList[i]["Hit level"])){
          if(moveList[i]["Hit level"].length <= 8){arr.push(moveList[i])}
        }
      }
      console.log(arr)
    }
  },
  







  unSafe:{
    name:'UnSafe',
    function:function(moveList){ 
      let arr=[];
      for(let i=0; i<moveList.length; i++){
        let filtered = moveList[i]["Block frame"].replace("~"," ");
        if(filtered.substring(0,3) < -9){
          arr.push(moveList[i]);
        }
      }
      console.log(arr)
    }
  },

  








  safe:{
    name:'Safe',
    function:function(moveList){ 
      let arr=[]
      for(let i=0; i<moveList.length; i++){
        let filteredScript = moveList[i]["Block frame"].replace("~"," ")
          if(filteredScript.substring(0,3) > -10){
              if(filteredScript !== ""){
                arr.push(moveList[i])
              }
          }           
      }
    console.log(arr)
    }
  },








  specFrames:{
    name:'Specific Frames',
    function(frames,moveList){
      let arr=[];
      for(let i=0; i<moveList.length; i++){
        let filteredMove = moveList[i]["Start up frame"].replace("~"," ")
        if(filteredMove.substring(0,2) === frames){ 
          arr.push(moveList[i])
        }
      }
      console.log(arr)
    }
  },







  
  frameRange: {
    name:'Frame Range',
    function:function(min,max,moveList){
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        let filteredMove = moveList[i]["Start up frame"].replace("~"," ")
        if(filteredMove.substring(0,3) >= min && filteredMove.substring(0,3) <= max){ 
          arr.push(moveList[i])
        }
      }
      console.log(arr)
    }
  },









  plusOnBlock: {
    name:'Plus on Block',
    function:function(moveList){ 
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        let filteredMove = moveList[i]["Block frame"].replace("~"," ")
        if(filteredMove.substring(0,3) > 0){
            arr.push(moveList[i])
        }       
      }
      console.log(arr)
    }
  },
  
  







  hitLevel: {
    name:'Hit Level',
    function:function(level,moveList){
      let arr = []
      for(let i=0; i<moveList.length; i++){
        let filteredMove = moveList[i]["Hit level"].replace(" ","")
        if(filteredMove === level) {
          arr.push(moveList[i])
        }
      }
      console.log(arr)
    }
  },










  counterLaunch: {
    name:'Launch on Counter',
    function:function(moveList){
      let regex = /launch/i
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(regex.test(moveList[i]["Counter hit frame"])){
          arr.push(moveList[i])       
        }   
      }
      console.log(arr)
    }
  },

    






  launch: {
    name:'Launch',
    function:function(moveList){
      let regex = /launch/i
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(regex.test(moveList[i]["Hit frame"])){
            arr.push(moveList[i])       
        }   
      }
      console.log(arr)
    }
  },


    





   
  counterKND: {
    name:'Knockdown on Counter',
    function:function(moveList){
      let regex = /knd/i
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(regex.test(moveList[i]["Counter hit frame"])){
          arr.push(moveList[i])       
        }   
      }
      console.log(arr)
    }
  },

    







  KND: {
    name:'Knockdown',
    function:function(moveList){
      let regex = /knd/i
      let arr = [];
      for(let i=0; i<moveList.length; i++){
          if(regex.test(moveList[i]["Hit frame"])){
              arr.push(moveList[i])       
          }   
      }
      console.log(arr)
    }
  },


    







  powerCrush: {
    name:'Power Crush',
    function:function(moveList){
      let regex = /power crush/i
      let arr = [];
      for(let i=0; i<moveList.length; i++){
          if(regex.test(moveList[i]["Notes"])){
              arr.push(moveList[i])       
          }   
      }
      console.log(arr)
    }
  },
  

    







  wallBounce: {
    name:'Wall Bounce',
    function:function(moveList){
      let regex = /wall bounce/i
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(regex.test(moveList[i]["Notes"])){
          arr.push(moveList[i])       
        }   
      }
      console.log(arr)
    }
  },

    







  homing: {
    name:'Homing',
    function:function(moveList){
      let regex = /homing/i
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(regex.test(moveList[i]["Notes"])){
          arr.push(moveList[i])       
        }   
      }
      console.log(arr)
    }
  },

    







  single: {
    name:'Single',
    function:function(moveList){
      let regex = /,/i
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(regex.test(moveList[i]["Damage"])=== false){
          if(moveList[i]["Damage"] !== ""){
              arr.push(moveList[i])
          }       
        }   
      }
      console.log(arr)
    }
  },

    







  dual: {
    name:'Dual',
    function:function(moveList){
      let regex = /,/ig
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(((moveList[i]["Damage"]).match(regex) || []).length === 1){
          if(moveList[i]["Damage"] !== ""){
            arr.push(moveList[i])
          }       
        }   
      }
      console.log(arr)
    }
  },

    






  tri: {
    name:'Tripple Moves',
    function:function(moveList){
      let regex = /,/ig
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(((moveList[i]["Damage"]).match(regex) || []).length === 2){
          if(moveList[i]["Damage"] !== ""){
            arr.push(moveList[i])
          }       
        }   
      }
      console.log(arr)
    }
  },
 
    






   
  rageArt: {
    name:'Rage Art',
    function:function(moveList){
    let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(moveList[i]["Notes"] === "Rage art"){arr.push(moveList[i])}
      }
      console.log(arr)
    }
  },


    







  
  rageDrive: {
    name:'Rage Drive',
    function:function(moveList){
      let arr = [];
      for(let i=0; i<moveList.length; i++){
        if(moveList[i]["Notes"] === "Rage drive"){
          arr.push(moveList[i])
        }
      }
      console.log(arr)
    }
  }

}

export default getCharacterInfo;
  // ,

    






   
  // AveSingleDam: function(){
  //     let array = [];
  //     let regex = /,/ig
  
  //     for(let i=0; i<window[characterDropdown.value].length; i++){
  //       if(((window[characterDropdown.value][i]["Damage"]).match(regex) || []).length == 0){
  //         if(window[characterDropdown.value][i]["Damage"] !== ""){
  //           array.push(parseInt(window[characterDropdown.value][i]["Damage"].substring(0,2)))
  //         }
  //       }
  //     }
  //     ave = array.reduce( (acc,val) => (acc+val) ) / array.length;
  //     console.log(ave)
  //     return ave
  //   },
  

    






  
  //   AveDualDam: function(){
  //     let tempArray1 = [];
  //     let tempArray2 = [];
  //     let tempAdd = []
  //     let regex = /,/ig
  
  //     for(let i=0; i<jin.length; i++){
        
  //       //matches how many moves are in the sequence using the ',' in "Damage"
  //       if(((jin[i]["Damage"]).match(regex) || []).length == 1){
  //         if(jin[i]["Damage"] !== ""){
            
  //           //creates array with elements, seperated by commas
  //           tempArray1 = jin[i]["Damage"].split(`,`)
            
  //           //loops through array, converts each element into numbers
  //           for(let i = 0; i<tempArray1.length; i++){
  //             tempArray2.push(parseInt(tempArray1[i]))
  //           }
            
  //           //finds average of elements within array, and pushes into seperate array
  //           let add = tempArray2.reduce( (acc,val) => (acc+val) );
  //           tempAdd.push(add)
  
  //           //finds average of all dual moves
  //           ave = tempAdd.reduce( (acc,val) => (acc+val) ) / tempAdd.length;
            
  //           //resets the temporary arrays for the next commands
  //           tempArray1 = [];
  //           tempArray2 = [];
            
  //         }
  //       }
  //     }
  //     console.log(ave)
  //   },
  //   // AveDualDam()
  

    






    
  // AveTriDam: function(){
  
  //     let tempArray1 = [];
  //     let tempArray2 = [];
  //     let tempAdd = []
  //     let regex = /,/ig
  
  //     for(let i=0; i<jin.length; i++){
        
  //       //matches how many moves are in the sequence using the ',' in "Damage"
  //       if(((jin[i]["Damage"]).match(regex) || []).length == 2){
  //         if(jin[i]["Damage"] !== ""){
            
  //           //creates array with elements, seperated by commas
  //           tempArray1 = jin[i]["Damage"].split(`,`)
            
  //           //loops through array, converts each element into numbers
  //           for(let i = 0; i<tempArray1.length; i++){
  //             tempArray2.push(parseInt(tempArray1[i]))
  //           }
            
  //           //finds average of elements within array, and pushes into seperate array
  //           let add = tempArray2.reduce( (acc,val) => (acc+val) );
  //           tempAdd.push(add)
          
  //           //finds average of all dual moves
  //           ave = tempAdd.reduce( (acc,val) => (acc+val) ) / tempAdd.length;
            
  //           //resets the temporary arrays for the next commands
  //           tempArray1 = [];
  //           tempArray2 = [];
            
  //         }
  //       }
  //     }
  //     console.log(ave)
  //   },
  //   // AveTriDam()
  

    





  
  //   AveDualDamAtxFrame: function(frames){
  //     singleInputForm.hidden= false

  //     let tempArray1 = [];
  //     let tempArray2 = [];
  //     let tempAdd = []
  //     let regex = /,/ig
  //     let frameRegex = /(\D*)(\d{1,2})(.*)/ig
  //     let newAve = "";
      
  //     for(let i=0; i<jin.length; i++){
  
  //         //matches the argument with specific range of frames
  //         if(parseInt(jin[i]["Start up frame"].replace(frameRegex, "$2"))== frames){ 
    
  //         //matches how many moves are in the sequence using the ',' in "Damage"
  //         if(((jin[i]["Damage"]).match(regex) || []).length == 1){
  //           if(jin[i]["Damage"] !== ""){
            
  //             //creates array with elements, seperated by commas
  //             tempArray1 = jin[i]["Damage"].split(`,`)
  //             // console.log(tempArray1)
  
  //             //loops through array, converts each element into numbers
  //             for(let i = 0; i<tempArray1.length; i++){
  //               tempArray2.push(parseInt(tempArray1[i]))
  //             }
              
  //             //adds elements within array, and pushes into seperate array
  //             let add = tempArray2.reduce( (acc,val) => (acc+val) );
  //             tempAdd.push(add)
  //             // console.log(add)
  //             // console.log(tempAdd)
  
  //             //finds average of all dual moves
  //             newAve = tempAdd.reduce( (acc,val) => (acc+val) ) / tempAdd.length;
              
  
  //             //resets the temporary arrays for the next commands
  //             tempArray1 = [];
  //             tempArray2 = [];
  //           }
  //         }
  //       }
  //     }
  //     console.log(newAve)
  //   },
  //   // AveDualDamAtxFrame(10)
  

    





  
  //   AveTriDamAtxFrame: function(frames){
  //     singleInputForm.hidden=false

  //     let tempArray1 = [];
  //     let tempArray2 = [];
  //     let tempAdd = []
  //     let regex = /,/ig
  //     let frameRegex = /(\D*)(\d{1,2})(.*)/ig
  //     let newAve = "";
      
  //     for(let i=0; i<jin.length; i++){
  
  //         //matches the argument with specific range of frames
  //         if(parseInt(jin[i]["Start up frame"].replace(frameRegex, "$2"))== frames){ 
    
  //         //matches how many moves are in the sequence using the ',' in "Damage"
  //         if(((jin[i]["Damage"]).match(regex) || []).length == 2){
  //           if(jin[i]["Damage"] !== ""){
            
  //             //creates array with elements, seperated by commas
  //             tempArray1 = jin[i]["Damage"].split(`,`)
  //             // console.log(tempArray1)
  
  //             //loops through array, converts each element into numbers
  //             for(let i = 0; i<tempArray1.length; i++){
  //               tempArray2.push(parseInt(tempArray1[i]))
  //             }
              
  //             //adds elements within array, and pushes into seperate array
  //             let add = tempArray2.reduce( (acc,val) => (acc+val) );
  //             tempAdd.push(add)
  //             // console.log(add)
  //             // console.log(tempAdd)
  
  //             //finds average of all dual moves
  //             newAve = tempAdd.reduce( (acc,val) => (acc+val) ) / tempAdd.length;
              
  
  //             //resets the temporary arrays for the next commands
  //             tempArray1 = [];
  //             tempArray2 = [];
  //           }
  //         }
  //       }
  //     }
  //     console.log(newAve)
  //   }
  // // AveTriDamAtxFrame(10)
  
  

  // values : {
  //   name:'Values',
  //   function:function(key){
  //     let array = [];
  //     for(let i=0; i<jin.length; i++){
  //       array.push(jin[i][key])
  //     }
  //   },
  // },
  






  // numberOf : {
  //   name:'Number Of',
  //   function:function(variable){
  //     let array = [];
  //     for(let i=0; i<jin.length; i++){
  //       if(jin[i][variable] !== ""){
  //       array.push(jin[i][variable])
  //       }
  //     }
  //   } 
  // },