import React, {useState}    from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table from './Table'



export default function SpecificFrames(props) {

    let [frames,setFrames]=useState(false)
    
    function handleChange(e){
        setFrames(e.target.value)
    }

    let moveList=           characters[props.dropDownValue].moveList
    let filteredMoveList=   getCharacterMoves.frames.specificFrames.infoFunc(frames,moveList)
   

    return (

        <div>
            
            <br/>
            
            <h3>SPECIFIC FRAME</h3>
            
            <br/>
            
            <input type='number' onChange={handleChange} value={frames}></input>

            {frames&&<Table filteredList={filteredMoveList}/>}

        </div>
        
    )
}