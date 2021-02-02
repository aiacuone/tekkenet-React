import React, {useEffect}    from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table from './Table'



export default function SpecificFrames(props) {

    function handleChange(e){
        props.changeSelectionObj.setAttribute1(e.target.value)
    }

    useEffect(()=>{
        props.changeSelectionObj.setAttribute1('')
    },[])

    
    // let moveList=           characters[props.dropDownValue].moveList
    // let filteredMoveList=   getCharacterMoves.frames.specificFrames.infoFunc(frames,moveList)
   

    return (
        <div>
            {console.log(props.selectionObj.attribute1)}
            <input class='input' type='number' onChange={handleChange} value={props.selectionObj.attribute1}></input>
            {/* {frames&&<Table filteredList={filteredMoveList}/>} */}
        </div>
        
    )
}