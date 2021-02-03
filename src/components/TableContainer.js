import React from 'react'
import characters from '../characters'
import getCharacterMoves from '../getCharacterMoves'
import Table from './Table'
import Footer from './Footer'

export default function TableContainer(props) {

    let character=props.selectionObj.character
    let category=props.selectionObj.category
    let subCategory=props.selectionObj.subCategory
    let attribute1=props.selectionObj.attribute1
    let attribute2=props.selectionObj.attribute2
    

    let noAttribute=[
        'knockdown','counterKnockdown','launch',
        'counterLaunch','rageArt','rageDrive',
        'safe','unSafe','plusOnBlock','powerCrush',
        'wallBounce','homing','single','dual','tripple'
    ]

    let oneAttribute=['specificFrames','specificHeight']

    let twoAttributes=['framesRange','startNFinish']

    let moveList=null
    let noAttributeMoveList=null
    let oneAttributeMoveList=null
    let twoAttributesMoveList=null

    if(subCategory!==''&&character!==''){

        moveList=characters[character].moveList

        if(noAttribute.indexOf(subCategory)>=0){
            noAttributeMoveList=getCharacterMoves[category][subCategory].infoFunc(moveList)
        }

        if(oneAttribute.indexOf(subCategory)>=0){
            oneAttributeMoveList=getCharacterMoves[category][subCategory].infoFunc(attribute1,moveList)
        }

        if(twoAttributes.indexOf(subCategory)>=0){
            twoAttributesMoveList=getCharacterMoves[category][subCategory].infoFunc(attribute1,attribute2,moveList)
        }
    }

    return (
            <div class='tableContainer'>
                
                {noAttributeMoveList!==null&&<Table selectionObj={props.selectionObj}filteredList={noAttributeMoveList}/>}
                {oneAttributeMoveList!==null&&<Table selectionObj={props.selectionObj}filteredList={oneAttributeMoveList}/>}
                {twoAttributesMoveList!==null&&<Table selectionObj={props.selectionObj}filteredList={twoAttributesMoveList}/>}
                
            </div>
    )
}
