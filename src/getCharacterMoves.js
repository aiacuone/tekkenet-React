
export let getCharacterMoves={

    height:{

        specificHeight:{
            name:   'Specific Height',
            button: 'Specific Height',
            infoFunc:function(height,moveList){
                let arr = []
                for(let i=0; i<moveList.length; i++){
                let filteredMove = moveList[i]["Hit level"].replace(" ","")
                if(filteredMove === height) {
                    arr.push(moveList[i])
                }
                }
                return arr
            }
        },

        startNFinish: {
            name:   'Start & Finish Height',
            button: 'Start & Finish',
            infoFunc:function(a,b,moveList){
                let arr = [];// eslint-disable-next-line
                let regex = new RegExp( "^\\" + a + ".+" + "\\" + b + "\\s*$");
                for(let i=0; i<moveList.length; i++){
                    if(regex.test(moveList[i]["Hit level"])){
                    if(moveList[i]["Hit level"].length <= 8){arr.push(moveList[i])}
                    }
                }
                return arr
            }
        }
    },


    launch:{

        launch: {
            name:   'Normal Launch',
            button: 'Launch',
            infoFunc:function(moveList){
              let regex = /launch/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                  if(regex.test(moveList[i]["Hit frame"])){
                      arr.push(moveList[i])       
                  }   
              }
              return arr
            }
        },

        counterLaunch: {
            name:   'Launch on Counter',
            button: 'Counter Launch',
            infoFunc:function(moveList){
            let regex = /launch/i
            let arr = [];
            for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Counter hit frame"])){
                arr.push(moveList[i])       
                }   
            }
            return arr
            }
        }
    },


    frames:{

        specificFrames:{
            name:   'Specify Frames',
            button: 'Specify Frames',
            infoFunc(frames,moveList){
              let arr=[];
              for(let i=0; i<moveList.length; i++){
                let filteredMove = moveList[i]["Start up frame"].replace("~"," ")
                if(filteredMove.substring(0,2) === frames){ 
                  arr.push(moveList[i])
                }
              }
              
              return arr
            }
          },

        framesRange: {
            name:   'Frames Range',
            button: 'Frames Range',
            infoFunc:function(min,max,moveList){
                let arr = [];
                for(let i=0; i<moveList.length; i++){
                let filteredMove = moveList[i]["Start up frame"].replace("~"," ")
                if(filteredMove.substring(0,3) >= min && filteredMove.substring(0,3) <= max){ 
                    arr.push(moveList[i])
                }
                }
                return arr
            }
        }
    },


    knockdown:{

        knockdown: {
            name:   'Normal Knockdown',
            button: 'Knockdown',
            infoFunc:function(moveList){
              let regex = /knd/i
              let arr = [];
              console.log('knockfunction')
              for(let i=0; i<moveList.length; i++){
                  if(regex.test(moveList[i]["Hit frame"])){
                      arr.push(moveList[i])       
                  }   
              }
              
              return arr
            }
          },

        counterKnockdown: {
            name:   'Knockdown on Counter',
            button: 'Counter Knockdown',
            infoFunc:function(moveList){
              let regex = /knd/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Counter hit frame"])){
                  arr.push(moveList[i])       
                }   
              }
              return arr
            }
        }
    },


    rage:{

        rageArt: {
            name:   'Rage Art',
            button: 'Rage Art',
            infoFunc:function(moveList){
            let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(moveList[i]["Notes"] === "Rage art"){arr.push(moveList[i])}
              }
              return arr
            }
          },
        
          rageDrive: {
            name:   'Rage Drive',
            button: 'Rage Drive',
            infoFunc:function(moveList){
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(moveList[i]["Notes"] === "Rage drive"){
                  arr.push(moveList[i])
                }
              }
              return arr
            }
          }
    },


    safety:{

        safe:{
            name:   'Safe on Block',
            button: 'Safe',
            infoFunc:function(moveList){ 
              let arr=[]
              for(let i=0; i<moveList.length; i++){
                let filteredScript = moveList[i]["Block frame"].replace("~"," ")
                  if(filteredScript.substring(0,3) > -10){
                      if(filteredScript !== ""){
                        arr.push(moveList[i])
                      }
                  }           
              }
              return arr
            }
          },

        unSafe:{
            name:   'UnSafe on Block',
            button: 'Un-Safe',
            infoFunc:function(moveList){ 
                let arr=[];
                for(let i=0; i<moveList.length; i++){
                let filtered = moveList[i]["Block frame"].replace("~"," ");
                if(filtered.substring(0,3) < -9){
                    arr.push(moveList[i]);
                }
                }
                return arr
            }
        }
    },


    situational:{
        
        plusOnBlock: {
            name:   'Plus on Block',
            button: '+On-Block',
            infoFunc:function(moveList){ 
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                let filteredMove = moveList[i]["Block frame"].replace("~"," ")
                if(filteredMove.substring(0,3) > 0){
                    arr.push(moveList[i])
                }       
              }
              return arr
            }
        },

        powerCrush: {
            name:   'Power Crush',
            button: 'Power Crush',
            infoFunc:function(moveList){
                let regex = /power crush/i
                let arr = [];
                for(let i=0; i<moveList.length; i++){
                    if(regex.test(moveList[i]["Notes"])){
                        arr.push(moveList[i])       
                    }   
                }
                return arr
            }
        },

        wallBounce: {
            name:   'Wall Bounce',
            button: 'Wall Bounce',
            infoFunc:function(moveList){
              let regex = /wall bounce/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Notes"])){
                  arr.push(moveList[i])       
                }   
              }
              return arr
            }
        },

        homing: {
            name:   'Homing/Tracking',
            button: 'Homing/Tracking',
            infoFunc:function(moveList){
              let regex = /homing/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Notes"])){
                  arr.push(moveList[i])       
                }   
              }
              return arr
            }
        }
    },


    strings:{

        single: {
            name:   'Single',
            button: 'Single',
            infoFunc:function(moveList){
              let regex = /,/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Damage"])=== false){
                  if(moveList[i]["Damage"] !== ""){
                      arr.push(moveList[i])
                  }       
                }   
              }
              return arr
            }
        },

        dual: {
            name:   'Dual',
            button: 'Dual',
            infoFunc:function(moveList){
              let regex = /,/ig
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(((moveList[i]["Damage"]).match(regex) || []).length === 1){
                  if(moveList[i]["Damage"] !== ""){
                    arr.push(moveList[i])
                  }       
                }   
              }
              return arr
            }
        },
        
        tripple: {
            name:   'Tripple',
            button: 'Tripple',
            infoFunc:function(moveList){
              let regex = /,/ig
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(((moveList[i]["Damage"]).match(regex) || []).length === 2){
                  if(moveList[i]["Damage"] !== ""){
                    arr.push(moveList[i])
                  }       
                }   
              }
              return arr
            }
        }
    }       
}

export default getCharacterMoves;