import React, {useState} from 'react'

export default function FrameRange({dropDownValue}) {
    let [lowValue,setLowValue]=useState('')
    let [highValue,setHighValue]=useState('')

    function handleChange(e){
        e.target.name==='low'?setLowValue(e.target.value):setHighValue(e.target.value)
    }
    return (
       
        <div>
            <h1>FRAME RANGE</h1>
            <label>LOW<input type='number' value={lowValue} name='low' min='0' onChange={handleChange}></input></label>
            <label>HIGH<input type='number' value={highValue} name='high' min='0' onChange={handleChange}></input></label>
        </div>
    )
}

