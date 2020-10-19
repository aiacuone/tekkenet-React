import React, {useState} from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function SpecificHeight() {
    let [value,setValue]=useState('') 
    function handleChange(e){
        setValue(e.target.value)
    }
    
    return (
        <div>
            
            <h3>SPECIFIC HEIGHT</h3>
            <label>LOW<input type='radio' value='low' name='height' onChange={handleChange}></input></label>
            <label>MED<input type='radio' value='med' name='height' onChange={handleChange}></input></label>
            <label>HIGH<input type='radio' value='high' name='height' onChange={handleChange}></input><br/></label>
            {<h3>{value.toUpperCase()}</h3>}


            {getCharacterMoves.height.specificHeight.infoFunc()}
        </div>
    )
}
