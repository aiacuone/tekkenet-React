import React, {useState} from 'react'

export default function SpecificFrame({dropDownValue}) {
    let [value,setValue]=useState('')
    function handleChange(e){
        setValue(e.target.value)
    }
    return (
        <div>
            <h3>SPECIFIC FRAME</h3>
            <input type='number' onChange={handleChange} value={value}></input>
        </div>
    )
}
