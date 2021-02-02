import React, {useState,useEffect} from 'react'
import getCharacterMoves from '../getCharacterMoves'
import characters from '../characters'
import Table from './Table'



export default function FramesRange(props) {

    function handleChange(e){
        e.target.name==='low'?props.changeSelectionObj.setAttribute1(e.target.value):props.changeSelectionObj.setAttribute2(e.target.value)
    }

    useEffect(()=>{
        props.changeSelectionObj.setAttribute1('')
        props.changeSelectionObj.setAttribute2('')
    },[])
    

    // let moveList=characters[props.dropDownValue].moveList
    // let filteredMoveList=getCharacterMoves.frames.framesRange.infoFunc(lowValue,highValue,moveList)

    
    return (

        <div>
            {console.log(props.selectionObj.attribute1,props.selectionObj.attribute2)}
            <label>LOW  <input class='input'type='number' value={props.selectionObj.attribute1}   name='low'  min='9' onChange={handleChange}></input></label>
            <label>HIGH <input class='input' type='number' value={props.selectionObj.attribute2}  name='high' min='9' onChange={handleChange}></input></label>
                    
            {/* {lowValue&&highValue&&<Table filteredList={filteredMoveList}/>} */}
        </div>
        
    )
}


