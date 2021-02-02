import React, {useEffect} from 'react'
import '../styles/subCategory.css'

export default function SubCategory(props) {


    let objSubCategoryObj={
        frames:[ 
            { code:'framesRange',button:'Range' },
            { code : 'specificFrames' , button:'Specific' } 
        ],
        height:[ 
            { code:'specificHeight',button:'Specific'},
            { code:'startNFinish',button:'Start&Finish'} 
        ],
        knockdown:[ 
            { code:'knockdown',button:'Normal'},
            { code:'counterKnockdown',button:'Counter'} 
        ],
        launch:[ 
            { code:'launch',button:'Normal'},
            { code:'counterLaunch',button:'Counter'} 
        ],
        rage:[ 
            { code:'rageArt',button:'Rage Art'},
            { code:'rageDrive',button:'Rage Drive'} 
        ],
        safety:[ 
            { code:'safe',button:'Safe'},
            { code:'unSafe',button:'Un-safe'} 
        ],
        situational:[ 
            {code:'plusOnBlock',button:'+On Block'},
            {code:'powerCrush',button:'Power Crush'},
            {code:'wallBounce',button:'Wall Bounce'},
            {code:'homing',button:'Homing'} 
        ],
        strings:[ 
            { code:'single',button:'Single'},
            { code:'dual',button:'Double'},
            { code:'tripple',button:'Tripple'} 
        ]
    }

    function handleClick(item){
        props.changeSelectionObj.setSubCategory(item)
        props.changeSelectionObj.setAttribute1('')
        props.changeSelectionObj.setAttribute2('')
    }

    let subCategoryButtons=null

    if(props.selectionObj.category!==''){
        subCategoryButtons=objSubCategoryObj[props.selectionObj.category].map((item)=>{
           return <button class='categoryButton' value={item.code} onClick={()=>handleClick(item.code)}>{item.button.toUpperCase()}</button>
       })
   }





    return (
        <div class='subCategory'>
            {props.selectionObj.category!==''&&(
                <div class='subCategoryContainer'>
                    <div class='subCategoryButtonContainer'>{subCategoryButtons}</div>
                </div>)}
        </div>
    )
}
