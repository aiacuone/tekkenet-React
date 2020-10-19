import React, {useState} from 'react'
import FramesRange from './FramesRange'
import SpecificFrames from './SpecificFrames'


export default function Frames() {
    let [framesRange,setFramesRange]        =useState(false)
    let [specificFrames,setSpecificFrames]  =useState(false)
    
    function handleClick(e){
        setFramesRange      (false)
        setSpecificFrames   (false)
        e.target.value==='framesRange'      &&setFramesRange    (true)
        e.target.value==='specificFrames'   &&setSpecificFrames (true)
    }

    let buttons=[
        <button value='framesRange'     onClick={handleClick}>FRAMES RANGE      </button>,
        <button value='specificFrames'  onClick={handleClick}>SPECIFIC FRAMES   </button>
    ]

    return (
        <div>
            {buttons}

            {framesRange    &&<FramesRange />}
            {specificFrames &&<SpecificFrames />}
        </div>
    )
}

