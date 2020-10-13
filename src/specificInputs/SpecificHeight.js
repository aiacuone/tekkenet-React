import React, {useState} from 'react'

export default function SpecificHeight({dropDownValue}) {
    let [value,setValue]=useState('')
    function handleChange(e){
        setValue(e.target.value)
    }
    
    return (
        <div>
            <h1>SPECIFIC HEIGHT</h1>
            <label>LOW<input type='radio' value='low' name='height' onChange={handleChange}></input></label>
            <label>MED<input type='radio' value='med' name='height' onChange={handleChange}></input></label>
            <label>HIGH<input type='radio' value='high' name='height' onChange={handleChange}></input></label>
        </div>
    )
}
