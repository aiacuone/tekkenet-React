Height:
export let getCharacterMoves={

    height:{

        specificHeight:{
            name:'Specific Height',
            button:'Specific Height',
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

        startNFinish: {
            name:'Start & Finish Height',
            button:'Start & Finish',
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
        }
    },


    launch:{

        launch: {
            name:'Normal Launch',
            button:'Launch',
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

        counterLaunch: {
            name:'Launch on Counter',
            button:'Counter Launch',
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
        }
    },


    frames:{

        specFrames:{
            name:'Specify Frames',
            button:'Specify Frames',
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

        framesRange: {
            name:'Frames Range',
            button:'Frames Range',
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
        }
    },


    knockdown:{

        knockdown: {
            name:'Normal Knockdown',
            button:'Knockdown',
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

        counterKnockdown: {
            name:'Knockdown on Counter',
            button:'Counter Knockdown',
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
        }
    },


    rage:{

        rageArt: {
            name:'Rage Art',
            button:'Rage Art',
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
            button:'Rage Drive',
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
    },


    safety:{

        safe:{
            name:'Safe on Block',
            button:'Safe',
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

        unSafe:{
            name:'UnSafe on Block',
            button:'Un-Safe',
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
        }
    },


    situational:{
        
        plusOnBlock: {
            name:'Plus on Block',
            button:'+On-Block',
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

        powerCrush: {
            name:'Power Crush',
            button:'Power Crush',
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
            button:'Wall Bounce',
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
            name:'Homing/Tracking',
            button:'Homing/Tracking',
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
        }
    },


    strings:{

        single: {
            name:'Single',
            button:'Single',
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
            button:'Dual',
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
        
        tripple: {
            name:'Tripple',
            button:'Tripple',
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
        }
    }       
}

export default getCharacterMoves;