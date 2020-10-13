import React, {useState} from 'react'

export default function SpecificFrame() {
    let [value,setValue]=useState('')
    function handleChange(e){
        setValue(e.target.value)
    }
    return (
        <div>
            <h1>SPECIFIC FRAME</h1>
            <input type='number' onChange={handleChange} value={value}></input>
        </div>
    )
}
