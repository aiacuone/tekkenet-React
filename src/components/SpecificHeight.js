import React, {useEffect} from 'react'
import characters from '../characters'
import getCharacterMoves from '../getCharacterMoves'
import Table from './Table'




export default function SpecificHeight(props) {
    
    function handleChange(e){
        props.changeSelectionObj.setAttribute1(e.target.value)
    }
    
    useEffect(()=>{
        props.changeSelectionObj.setAttribute1('')
    },[])
    // let moveList=           characters[props.dropDownValue].moveList
    // let filteredMoveList=   getCharacterMoves.height.specificHeight.infoFunc(height,moveList)

    return (

        <div>
            {console.log(props.selectionObj.attribute1)}
            <label>LOW<input    type='radio' value='l'  name='height' onChange={handleChange}></input></label>
            <label>MED<input    type='radio' value='m'  name='height' onChange={handleChange}></input></label>
            <label>HIGH<input   type='radio' value='h'  name='height' onChange={handleChange}></input><br/></label>

            {/* {height&&<SpecificHeightTable  filteredMoveList={filteredMoveList} dropDownValue={props.dropDownValue} />} */}
            {/* {height&&<Table  filteredList={filteredMoveList} dropDownValue={props.dropDownValue} />} */}

        </div>
        
    )
}
