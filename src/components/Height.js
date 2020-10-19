import React, {useState}    from 'react'
import SpecificHeight       from './SpecificHeight'
import StartNFinish         from './StartNFinish'

export default function Height() {
    let [specificHeight,setSpecificHeight]  =useState(false)
    let [startNFinish,setStartNFinish]      =useState(false)

    function handleClick(e){
        setSpecificHeight   (false)
        setStartNFinish     (false)
        e.target.value==='specificHeight'   &&setSpecificHeight(true)
        e.target.value==='startNFinish'     &&setStartNFinish  (true)
    }

    let buttons=[
        <button onClick={handleClick} value='specificHeight'>   SPECIFIC HEIGHT  </button>,
        <button onClick={handleClick} value='startNFinish'>     START AND FINISH </button>]
    
    return (
        <div>
            {buttons}

            {specificHeight &&<SpecificHeight />}
            {startNFinish   &&<StartNFinish />}
        </div>
    )
}
