

export let getCharacterInfo={








  values : {
    name:'Values',
    function:function(key){
      let array = [];
      for(let i=0; i<jin.length; i++){
        array.push(jin[i][key])
      }
    },
  },
  






  numberOf : {
    name:'Number Of',
    function:function(variable){
      let array = [];
      for(let i=0; i<jin.length; i++){
        if(jin[i][variable] !== ""){
        array.push(jin[i][variable])
        }
      }
    } 
  },








  startNFinish: {
    name:'Start & Finish',
    function:function(a,b){
      let arr = [];
      let regex = new RegExp( "^\\" + a + ".+" + "\\" + b + "\\s$");
      for(let i=0; i<jin.length; i++){
        if(regex.test(jin[i]["Hit level"])){
          if(jin[i]["Hit level"].length <= 8){arr.push(jin[i])}
        }
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },
  







  unSafe:{
    name:'UnSafe',
    function:function(){ 
      let arr=[];
      for(let i=0; i<window[characterDropdown.value].length; i++){
        let filtered = window[characterDropdown.value][i]["Block frame"].replace("~"," ");
        if(filtered.substring(0,3) < -9){
          arr.push(window[characterDropdown.value][i]);
        }
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },

  








  safe:{
    name:'Safe',
    function:function(){ 
      let arr=[]
        
      for(let i=0; i<window[characterDropdown.value].length; i++){
        filteredScript = window[characterDropdown.value][i]["Block frame"].replace("~"," ")
          if(filteredScript.substring(0,3) > -10){
              if(filteredScript !== ""){
                arr.push(window[characterDropdown.value][i])
              }
          }           
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },








  specFrames:{
    name:'Specific Frames',
    function(frames){
      let arr=[];

      for(let i=0; i<window[characterDropdown.value].length; i++){
        let filteredMove = window[characterDropdown.value][i]["Start up frame"].replace("~"," ")
        if(filteredMove.substring(0,2) == frames){ 
          arr.push(window[characterDropdown.value][i])
        }
      }
      setTimeout(function(){buildTable({...arr})},500)
    }
  },







  
  frameRange: {
    name:'Frame Range',
    function:function(min,max){
      let arr = [];
    
      for(let i=0; i<window[characterDropdown.value].length; i++){
        filteredMove = window[characterDropdown.value][i]["Start up frame"].replace("~"," ")
        if(filteredMove.substring(0,3) >= min && filteredMove.substring(0,3) <= max){ 
          arr.push(window[characterDropdown.value][i])
        }
      }
      setTimeout(function(){buildTable({...arr})},500)
    }
  },









  plusOnBlock: {
    name:'Plus on Block',
    function:function(){ 
      let arr = [];
      for(let i=0; i<window[characterDropdown.value].length; i++){
        let filteredMove = window[characterDropdown.value][i]["Block frame"].replace("~"," ")
        if(filteredMove.substring(0,3) > 0){
            arr.push(window[characterDropdown.value][i])
        }       
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },
  
  







  hitLevel: {
    name:'Hit Level',
    function:function(level){
      let arr = []
      for(let i=0; i<window[characterDropdown.value].length; i++){
        let filteredMove = window[characterDropdown.value][i]["Hit level"].replace(" ","")
        if(filteredMove == level) {
          arr.push(window[characterDropdown.value][i])
        }
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },










  counterLaunch: {
    name:'Launch on Counter',
    function:function(){
      let regex = /launch/i
      let arr = [];
      for(let i=0; i<window[characterDropdown.value].length; i++){
        if(regex.test(window[characterDropdown.value][i]["Counter hit frame"])){
          arr.push(window[characterDropdown.value][i])       
        }   
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },

    






  launch: {
    name:'Launch',
    function:function(){
      let regex = /launch/i
      let arr = [];
  
      for(let i=0; i<window[characterDropdown.value].length; i++){
        if(regex.test(window[characterDropdown.value][i]["Hit frame"])){
            arr.push(window[characterDropdown.value][i])       
        }   
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },


    





   
  counterKND: {
    name:'Knockdown on Counter',
    function:function(){
      let regex = /knd/i
      let arr = [];
      for(let i=0; i<window[characterDropdown.value].length; i++){
        if(regex.test(window[characterDropdown.value][i]["Counter hit frame"])){
          arr.push(window[characterDropdown.value][i])       
        }   
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },

    







    KND: {
      name:'Knockdown',
      function:function(){
        let regex = /knd/i
        let arr = [];
        for(let i=0; i<window[characterDropdown.value].length; i++){
            if(regex.test(window[characterDropdown.value][i]["Hit frame"])){
                arr.push(window[characterDropdown.value][i])       
            }   
        }
        setTimeout(function(){buildTable({...arr})},0)
      }
    },


    







    powerCrush: {
      name:'Power Crush',
      function:function(){
        let regex = /power crush/i
        let arr = [];
  
        for(let i=0; i<window[characterDropdown.value].length; i++){
            if(regex.test(window[characterDropdown.value][i]["Notes"])){
                arr.push(window[characterDropdown.value][i])       
            }   
        }
        setTimeout(function(){buildTable({...arr})},0)
      }
    },
  

    







  wallBounce: {
    name:'Wall Bounce',
    function:function(){
      let regex = /wall bounce/i
      let arr = [];
      for(let i=0; i<window[characterDropdown.value].length; i++){
        if(regex.test(window[characterDropdown.value][i]["Notes"])){
          arr.push(window[characterDropdown.value][i])       
        }   
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },

    







    homing: {
      name:'Homing',
      function:function(){
        let regex = /homing/i
        let arr = [];
  
        for(let i=0; i<window[characterDropdown.value].length; i++){
            if(regex.test(window[characterDropdown.value][i]["Notes"])){
                arr.push(window[characterDropdown.value][i])       
            }   
        }
        setTimeout(function(){buildTable({...arr})},0)
      }
    },

    







  single: {
    name:'Single',
    function:function(){
        let regex = /,/i
        let arr = [];
  
        for(let i=0; i<window[characterDropdown.value].length; i++){
            if(regex.test(window[characterDropdown.value][i]["Damage"])== false){
                if(window[characterDropdown.value][i]["Damage"] !== ""){
                    arr.push(window[characterDropdown.value][i])
                }       
            }   
        }
        setTimeout(function(){buildTable({...arr})},0)
      }
    },

    







    dual: {
      name:'Dual',
      function:function(){
        let regex = /,/ig
        let arr = [];
  
        for(let i=0; i<window[characterDropdown.value].length; i++){
            if(((window[characterDropdown.value][i]["Damage"]).match(regex) || []).length == 1){
                if(window[characterDropdown.value][i]["Damage"] !== ""){
                    arr.push(window[characterDropdown.value][i])
                }       
            }   
        }
        setTimeout(function(){buildTable({...arr})},0)
      }
    },

    






    tri: {
      name:'Tripple Moves',
      function:function(){
        let regex = /,/ig
        let arr = [];
  
        for(let i=0; i<window[characterDropdown.value].length; i++){
            if(((window[characterDropdown.value][i]["Damage"]).match(regex) || []).length == 2){
                if(window[characterDropdown.value][i]["Damage"] !== ""){
                    arr.push(window[characterDropdown.value][i])
                }       
            }   
        }
        setTimeout(function(){buildTable({...arr})},0)
      }
    },
 
    






   
  rageArt: {
    name:'Rage Art',
    function:function(){
    let arr = [];
  
      for(let i=0; i<window[characterDropdown.value].length; i++){
        if(window[characterDropdown.value][i]["Notes"] == "Rage art"){arr.push(window[characterDropdown.value][i])}
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },


    







  
  rageDrive: {
    name:'Rage Drive',
    function:function(){
      let arr = [];
      for(let i=0; i<window[characterDropdown.value].length; i++){
        if(window[characterDropdown.value][i]["Notes"] == "Rage drive"){
          arr.push(window[characterDropdown.value][i])
        }
      }
      setTimeout(function(){buildTable({...arr})},0)
    }
  },

    






   
  AveSingleDam: function(){
      let array = [];
      let regex = /,/ig
  
      for(let i=0; i<window[characterDropdown.value].length; i++){
        if(((window[characterDropdown.value][i]["Damage"]).match(regex) || []).length == 0){
          if(window[characterDropdown.value][i]["Damage"] !== ""){
            array.push(parseInt(window[characterDropdown.value][i]["Damage"].substring(0,2)))
          }
        }
      }
      ave = array.reduce( (acc,val) => (acc+val) ) / array.length;
      console.log(ave)
      return ave
    },
  

    






  
    AveDualDam: function(){
      let tempArray1 = [];
      let tempArray2 = [];
      let tempAdd = []
      let regex = /,/ig
  
      for(let i=0; i<jin.length; i++){
        
        //matches how many moves are in the sequence using the ',' in "Damage"
        if(((jin[i]["Damage"]).match(regex) || []).length == 1){
          if(jin[i]["Damage"] !== ""){
            
            //creates array with elements, seperated by commas
            tempArray1 = jin[i]["Damage"].split(`,`)
            
            //loops through array, converts each element into numbers
            for(let i = 0; i<tempArray1.length; i++){
              tempArray2.push(parseInt(tempArray1[i]))
            }
            
            //finds average of elements within array, and pushes into seperate array
            let add = tempArray2.reduce( (acc,val) => (acc+val) );
            tempAdd.push(add)
  
            //finds average of all dual moves
            ave = tempAdd.reduce( (acc,val) => (acc+val) ) / tempAdd.length;
            
            //resets the temporary arrays for the next commands
            tempArray1 = [];
            tempArray2 = [];
            
          }
        }
      }
      console.log(ave)
    },
    // AveDualDam()
  

    






    
  AveTriDam: function(){
  
      let tempArray1 = [];
      let tempArray2 = [];
      let tempAdd = []
      let regex = /,/ig
  
      for(let i=0; i<jin.length; i++){
        
        //matches how many moves are in the sequence using the ',' in "Damage"
        if(((jin[i]["Damage"]).match(regex) || []).length == 2){
          if(jin[i]["Damage"] !== ""){
            
            //creates array with elements, seperated by commas
            tempArray1 = jin[i]["Damage"].split(`,`)
            
            //loops through array, converts each element into numbers
            for(let i = 0; i<tempArray1.length; i++){
              tempArray2.push(parseInt(tempArray1[i]))
            }
            
            //finds average of elements within array, and pushes into seperate array
            let add = tempArray2.reduce( (acc,val) => (acc+val) );
            tempAdd.push(add)
          
            //finds average of all dual moves
            ave = tempAdd.reduce( (acc,val) => (acc+val) ) / tempAdd.length;
            
            //resets the temporary arrays for the next commands
            tempArray1 = [];
            tempArray2 = [];
            
          }
        }
      }
      console.log(ave)
    },
    // AveTriDam()
  

    





  
    AveDualDamAtxFrame: function(frames){
      singleInputForm.hidden= false

      let tempArray1 = [];
      let tempArray2 = [];
      let tempAdd = []
      let regex = /,/ig
      let frameRegex = /(\D*)(\d{1,2})(.*)/ig
      let newAve = "";
      
      for(let i=0; i<jin.length; i++){
  
          //matches the argument with specific range of frames
          if(parseInt(jin[i]["Start up frame"].replace(frameRegex, "$2"))== frames){ 
    
          //matches how many moves are in the sequence using the ',' in "Damage"
          if(((jin[i]["Damage"]).match(regex) || []).length == 1){
            if(jin[i]["Damage"] !== ""){
            
              //creates array with elements, seperated by commas
              tempArray1 = jin[i]["Damage"].split(`,`)
              // console.log(tempArray1)
  
              //loops through array, converts each element into numbers
              for(let i = 0; i<tempArray1.length; i++){
                tempArray2.push(parseInt(tempArray1[i]))
              }
              
              //adds elements within array, and pushes into seperate array
              let add = tempArray2.reduce( (acc,val) => (acc+val) );
              tempAdd.push(add)
              // console.log(add)
              // console.log(tempAdd)
  
              //finds average of all dual moves
              newAve = tempAdd.reduce( (acc,val) => (acc+val) ) / tempAdd.length;
              
  
              //resets the temporary arrays for the next commands
              tempArray1 = [];
              tempArray2 = [];
            }
          }
        }
      }
      console.log(newAve)
    },
    // AveDualDamAtxFrame(10)
  

    





  
    AveTriDamAtxFrame: function(frames){
      singleInputForm.hidden=false

      let tempArray1 = [];
      let tempArray2 = [];
      let tempAdd = []
      let regex = /,/ig
      let frameRegex = /(\D*)(\d{1,2})(.*)/ig
      let newAve = "";
      
      for(let i=0; i<jin.length; i++){
  
          //matches the argument with specific range of frames
          if(parseInt(jin[i]["Start up frame"].replace(frameRegex, "$2"))== frames){ 
    
          //matches how many moves are in the sequence using the ',' in "Damage"
          if(((jin[i]["Damage"]).match(regex) || []).length == 2){
            if(jin[i]["Damage"] !== ""){
            
              //creates array with elements, seperated by commas
              tempArray1 = jin[i]["Damage"].split(`,`)
              // console.log(tempArray1)
  
              //loops through array, converts each element into numbers
              for(let i = 0; i<tempArray1.length; i++){
                tempArray2.push(parseInt(tempArray1[i]))
              }
              
              //adds elements within array, and pushes into seperate array
              let add = tempArray2.reduce( (acc,val) => (acc+val) );
              tempAdd.push(add)
              // console.log(add)
              // console.log(tempAdd)
  
              //finds average of all dual moves
              newAve = tempAdd.reduce( (acc,val) => (acc+val) ) / tempAdd.length;
              
  
              //resets the temporary arrays for the next commands
              tempArray1 = [];
              tempArray2 = [];
            }
          }
        }
      }
      console.log(newAve)
    }
  // AveTriDamAtxFrame(10)
  
  }   

