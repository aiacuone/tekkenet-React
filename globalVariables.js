//SELECTIONS
let body= document.getElementById('body');
let headerContainer = document.getElementById('headerContainer')
let charContainer = document.getElementById('characterContainer')
let optionsContainer = document.getElementById('optionsContainer')
let tableContainer = document.getElementById('tableContainer')
let charInfoContainer = document.getElementById('charInfoContainer')
let infoContainer = document.getElementById('infoContainer')
let firstLayerValue = ''
    


// Function Names & Headers
let functObj = { 
    

    'height':{
        'hitLevel':{header:'SPECIFIC HEIGHT'},//Height Input
        'startNFinish':{header:'START/FINISH HEIGHT'}, //2 number inputs
    },
    'launch':{
        'launch':{header:'LAUNCHERS'},//NO input
        'counterLaunch':{header:'LAUNCH ON COUNTER'},//NO input
    },
    'frames':{
        'specFrames':{header:'SPECIFIC FRAME'},//Single input
        'frameRange':{header:'FRAME RANGE'},//2 number inputs
    },
    'knockdown':{
        'KND':{header:'KNOCKDOWN'},//NO input
        'counterKND':{header:'COUNTER KNOCKDOWN'},//NO input
    },
    'rage':{
        'rageArt':{header:'RAGE ART'},//NO input
        'rageDrive':{header:'RAGE DRIVE'},//NO input
    },
    'safety':{
        'safe':{header:'SAFE'}, //NO input
        'unSafe':{header:'UNSAFE'}//NO input
    }, 
    'situational':{
        'plusOnBlock':{header:'+ONBLOCK'},//NO input
        'powerCrush':{header:'POWERCRUSH'},//NO input
        'wallBounce':{header:'WALL BOUNCE'},//NO input
        'homing':{header:'HOMING'},//NO input
        
    },
    'Strings':{
        'single':{header:'SINGLE'},//NO input
        'dual':{header:'DUAL'},//NO input
        'tri':{header:'TRIPPLE'},//NO input
    },
    // 'average':{
    //     'aveSingleDam':{header:'SINGLE'},//NO input
    //     'aveDualDam':{header:'DUAL'},//NO input
    //     'aveTriDam':{header:'TRI MOVES'},//NO input
    //     'AveDualDamAtxFrame':{header:'DUAL @ X FRAME'}, //Single Number Input
    //     'AveTriDamAtxFrame':{header:'TRIPPLE @ X FRAME'}  //Single Number Input
    // },
    
    



    
    
    
}; 

//  functionObj Array, used to call functions      
let selRefName =  Object.keys(functObj) //DELETE LATER, old system
let functObjKeys = Object.keys(functObj);


// Move Category Object, used to reference character information, create table ids & headers
let moveObj= { 
  
    'Command':{id:'command'},
    'Hit level':{id:'hitLevel'},
    'Damage':{id:'damage'},
    'Start up frame':{id:'startUpFrame'},
    'Block frame':{id:'blockFrame'},
    'Hit frame':{id:'hitFrame'},
    'Counter hit frame':{id:'counterHitFrame'},
    'Notes':{id:'notes'}
  
}

//  moveObj Array, used for id's & calls
let moveRefName =  Object.keys(moveObj) 


let charObj = {
    akuma:'',
    alisa:'',
    anna:'',
    armorKing:'',
    asuka:'',
    bob:'',
    bryan:'',
    claudio:'',
    devilJin:'',
    dragunov:'',
    eddy:'',
    eliza:'',
    fahkumram:'',
    feng:'',
    ganryu:'',
    geese:'',
    gigas:'',
    heihachi:'',
    hwoarang:'',
    jack:'',
    jin:'',
    josie:'',
    julia:'',
    katarina:'',
    kazumi:'',
    kazuya:'',
    king:'',
    kuma:'',
    lars:'',
    law:'',
    lee:'',
    lei:'',
    leo:'',
    leroy:'',
    lili:'',
    luckyChoe:'',
    marduk:'',
    masterRaven:'',
    miguel:'',
    negan:'',
    nina:'',
    noctis:'',
    paul:'',
    shaheen:'',
    steve:'',
    xiaoyu:'',
    yoshimitsu:'',
    zafina:'',
};
let placeholder=''
    alisa=''
    akuma=''
    anna=''
    armorKing=''
    asuka=''
    bob=''
    bryan=''
    claudio=''
    devilJin=''
    dragunov=''
    eddy=''
    eliza=''
    fahkumram=''
    feng=''
    ganryu=''
    geese=''
    gigas=''
    heihachi=''
    hwoarang=''
    jack=''
    jin=''
    josie=''
    julia=''
    katarina=''
    kazumi=''
    kazuya=''
    king=''
    kuma=''
    lars=''
    law=''
    lee=''
    lei=''
    leo=''
    leroy=''
    lili=''
    luckyChoe=''
    marduk=''
    masterRaven=''
    miguel=''
    negan=''
    nina=''
    noctis=''
    paul=''
    shaheen=''
    steve=''
    xiaoyu=''
    yoshimitsu=''
    zafina=''

