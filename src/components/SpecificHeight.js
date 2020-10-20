import React, {useState} from 'react'
import SpecificHeightTable from './SpecificHeightTable'
import characters from '../characters'
import getCharacterMoves from '../getCharacterMoves'





export default function SpecificHeight(props) {
    
    let [height,setHeight]=   useState('') 
    

    function handleChange(e){

        setHeight(e.target.value)

    }
    
    let moveList=           characters[props.dropDownValue].moveList
    let filteredMoveList=   getCharacterMoves.height.specificHeight.infoFunc(height,moveList)

    return (

        <div>
            
            <h3>SPECIFIC HEIGHT</h3>
            <label>LOW<input    type='radio' value='l'  name='height' onChange={handleChange}></input></label>
            <label>MED<input    type='radio' value='m'  name='height' onChange={handleChange}></input></label>
            <label>HIGH<input   type='radio' value='h'  name='height' onChange={handleChange}></input><br/></label>

            {height&&<SpecificHeightTable  filteredMoveList={filteredMoveList} dropDownValue={props.dropDownValue} />}

        </div>
        
    )
}
