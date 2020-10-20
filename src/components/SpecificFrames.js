import React, {useState}    from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import SpecificFramesTable  from './SpecificFramesTable'



export default function SpecificFrames(props) {

    let [frames,setFrames]=useState(false)
    
    function handleChange(e){
        setFrames(e.target.value)
    }

    let moveList=           characters[props.dropDownValue].moveList
    let filteredMoveList=   getCharacterMoves.frames.specificFrames.infoFunc(frames,moveList)
   

    return (

        <div>

            <h3>SPECIFIC FRAME</h3>
            <input type='number' onChange={handleChange} value={frames}></input>

            {frames&&<SpecificFramesTable filteredMoveList={filteredMoveList}/>}

        </div>
        
    )
}