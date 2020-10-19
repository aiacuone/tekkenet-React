import React, {useState} from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function FramesRange() {
    let [lowValue,setLowValue]=useState('')
    let [highValue,setHighValue]=useState('')

    function handleChange(e){
        e.target.name==='low'?setLowValue(e.target.value):setHighValue(e.target.value)
    }
    
    return (
        <div>
            <h3>FRAME RANGE</h3>
            <label>LOW<input type='number' value={lowValue} name='low' min='0' onChange={handleChange}></input></label>
            <label>HIGH<input type='number' value={highValue} name='high' min='0' onChange={handleChange}></input></label>

            {getCharacterMoves.frames.framesRange.infoFunc()}
        </div>
    )
}
