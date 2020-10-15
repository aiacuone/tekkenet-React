
export let getCharacterMoves={

    height:{

        specificHeight:{
            name:'Specific Height',
            button:'Specific Height',
            infoFunc:function(level,moveList,buildTable){
                let arr = []
                for(let i=0; i<moveList.length; i++){
                let filteredMove = moveList[i]["Hit level"].replace(" ","")
                if(filteredMove === level) {
                    arr.push(moveList[i])
                }
                }
                console.log(arr)
                buildTable(arr)
            }
        },

        startNFinish: {
            name:'Start & Finish Height',
            button:'Start & Finish',
            infoFunc:function(a,b,moveList,buildTable){
                let arr = [];// eslint-disable-next-line
                let regex = new RegExp( "^\\" + a + ".+" + "\\" + b + "\\s$");
                for(let i=0; i<moveList.length; i++){
                    if(regex.test(moveList[i]["Hit level"])){
                    if(moveList[i]["Hit level"].length <= 8){arr.push(moveList[i])}
                    }
                }
                console.log(arr)
                buildTable(arr)
            }
        }
    },


    launch:{

        launch: {
            name:'Normal Launch',
            button:'Launch',
            infoFunc:function(moveList,buildTable){
              let regex = /launch/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                  if(regex.test(moveList[i]["Hit frame"])){
                      arr.push(moveList[i])       
                  }   
              }
              console.log(arr)
              buildTable(arr)
            }
        },

        counterLaunch: {
            name:'Launch on Counter',
            button:'Counter Launch',
            infoFunc:function(moveList,buildTable){
            let regex = /launch/i
            let arr = [];
            for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Counter hit frame"])){
                arr.push(moveList[i])       
                }   
            }
            buildTable(arr)
            console.log(arr)
            }
        }
    },


    frames:{

        specificFrames:{
            name:'Specify Frames',
            button:'Specify Frames',
            infoFunc(frames,moveList,buildTable){
              let arr=[];
              for(let i=0; i<moveList.length; i++){
                let filteredMove = moveList[i]["Start up frame"].replace("~"," ")
                if(filteredMove.substring(0,2) === frames){ 
                  arr.push(moveList[i])
                }
              }
              buildTable(arr)
              console.log(arr)
            }
          },

        framesRange: {
            name:'Frames Range',
            button:'Frames Range',
            infoFunc:function(min,max,moveList,buildTable){
                let arr = [];
                for(let i=0; i<moveList.length; i++){
                let filteredMove = moveList[i]["Start up frame"].replace("~"," ")
                if(filteredMove.substring(0,3) >= min && filteredMove.substring(0,3) <= max){ 
                    arr.push(moveList[i])
                }
                }
                buildTable(arr)
                console.log(arr)
            }
        }
    },


    knockdown:{

        knockdown: {
            name:'Normal Knockdown',
            button:'Knockdown',
            infoFunc:function(moveList,buildTable){
              let regex = /knd/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                  if(regex.test(moveList[i]["Hit frame"])){
                      arr.push(moveList[i])       
                  }   
              }
              buildTable(arr)
              console.log(arr)
            }
          },

        counterKnockdown: {
            name:'Knockdown on Counter',
            button:'Counter Knockdown',
            infoFunc:function(moveList,buildTable){
              let regex = /knd/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Counter hit frame"])){
                  arr.push(moveList[i])       
                }   
              }
              buildTable(arr)
              console.log(arr)
            }
        }
    },


    rage:{

        rageArt: {
            name:'Rage Art',
            button:'Rage Art',
            infoFunc:function(moveList,buildTable){
            let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(moveList[i]["Notes"] === "Rage art"){arr.push(moveList[i])}
              }
              buildTable(arr)
              console.log(arr)
            }
          },
        
          rageDrive: {
            name:'Rage Drive',
            button:'Rage Drive',
            infoFunc:function(moveList,buildTable){
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(moveList[i]["Notes"] === "Rage drive"){
                  arr.push(moveList[i])
                }
              }
              buildTable(arr)
              console.log(arr)
            }
          }
    },


    safety:{

        safe:{
            name:'Safe on Block',
            button:'Safe',
            infoFunc:function(moveList,buildTable){ 
              let arr=[]
              for(let i=0; i<moveList.length; i++){
                let filteredScript = moveList[i]["Block frame"].replace("~"," ")
                  if(filteredScript.substring(0,3) > -10){
                      if(filteredScript !== ""){
                        arr.push(moveList[i])
                      }
                  }           
              }
              buildTable(arr)
              console.log(arr)
            }
          },

        unSafe:{
            name:'UnSafe on Block',
            button:'Un-Safe',
            infoFunc:function(moveList,buildTable){ 
                let arr=[];
                for(let i=0; i<moveList.length; i++){
                let filtered = moveList[i]["Block frame"].replace("~"," ");
                if(filtered.substring(0,3) < -9){
                    arr.push(moveList[i]);
                }
                }
                buildTable(arr)
                console.log(arr)
            }
        }
    },


    situational:{
        
        plusOnBlock: {
            name:'Plus on Block',
            button:'+On-Block',
            infoFunc:function(moveList,buildTable){ 
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                let filteredMove = moveList[i]["Block frame"].replace("~"," ")
                if(filteredMove.substring(0,3) > 0){
                    arr.push(moveList[i])
                }       
              }
              buildTable(arr)
              console.log(arr)
            }
        },

        powerCrush: {
            name:'Power Crush',
            button:'Power Crush',
            infoFunc:function(moveList,buildTable){
                let regex = /power crush/i
                let arr = [];
                for(let i=0; i<moveList.length; i++){
                    if(regex.test(moveList[i]["Notes"])){
                        arr.push(moveList[i])       
                    }   
                }
                buildTable(arr)
                console.log(arr)
            }
        },

        wallBounce: {
            name:'Wall Bounce',
            button:'Wall Bounce',
            infoFunc:function(moveList,buildTable){
              let regex = /wall bounce/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Notes"])){
                  arr.push(moveList[i])       
                }   
              }
              buildTable(arr)
              console.log(arr)
            }
        },

        homing: {
            name:'Homing/Tracking',
            button:'Homing/Tracking',
            infoFunc:function(moveList,buildTable){
              let regex = /homing/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Notes"])){
                  arr.push(moveList[i])       
                }   
              }
              buildTable(arr)
              console.log(arr)
            }
        }
    },


    strings:{

        single: {
            name:'Single',
            button:'Single',
            infoFunc:function(moveList,buildTable){
              let regex = /,/i
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(regex.test(moveList[i]["Damage"])=== false){
                  if(moveList[i]["Damage"] !== ""){
                      arr.push(moveList[i])
                  }       
                }   
              }
              buildTable(arr)
              console.log(arr)
            }
        },

        dual: {
            name:'Dual',
            button:'Dual',
            infoFunc:function(moveList,buildTable){
              let regex = /,/ig
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(((moveList[i]["Damage"]).match(regex) || []).length === 1){
                  if(moveList[i]["Damage"] !== ""){
                    arr.push(moveList[i])
                  }       
                }   
              }
              buildTable(arr)
              console.log(arr)
            }
        },
        
        tripple: {
            name:'Tripple',
            button:'Tripple',
            infoFunc:function(moveList,buildTable){
              let regex = /,/ig
              let arr = [];
              for(let i=0; i<moveList.length; i++){
                if(((moveList[i]["Damage"]).match(regex) || []).length === 2){
                  if(moveList[i]["Damage"] !== ""){
                    arr.push(moveList[i])
                  }       
                }   
              }
              buildTable(arr)
              console.log(arr)
            }
        }
    }       
}

export default getCharacterMoves;