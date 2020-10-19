import React, {useState} from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function SpecificFrames() {
    let [value,setValue]=useState('')
    function handleChange(e){
        setValue(e.target.value)
    }
    return (
        <div>
            <h3>SPECIFIC FRAME</h3>
            <input type='number' onChange={handleChange} value={value}></input>
            {getCharacterMoves.frames.specificFrames.infoFunc()}
        </div>
    )
}