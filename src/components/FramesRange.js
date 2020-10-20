import React, {useState} from 'react'
import getCharacterMoves from '../getCharacterMoves'
import characters from '../characters'
import FramesRangeTable from './FramesRangeTable'



export default function FramesRange(props) {

    let [lowValue,setLowValue]  =useState('')
    let [highValue,setHighValue]=useState('')

    function handleChange(e){
        e.target.name==='low'?setLowValue(e.target.value):setHighValue(e.target.value)
    }

    let moveList=characters[props.dropDownValue].moveList
    let filteredMoveList=getCharacterMoves.frames.framesRange.infoFunc(lowValue,highValue,moveList)

    
    return (

        <div>

            <h3>FRAME RANGE</h3>

            <label>LOW  <input type='number' value={lowValue}   name='low'  min='9' onChange={handleChange}></input></label>
            <label>HIGH <input type='number' value={highValue}  name='high' min='9' onChange={handleChange}></input></label>

            {lowValue&&highValue&&<FramesRangeTable filteredMoveList={filteredMoveList}/>}

        </div>
        
    )
}


