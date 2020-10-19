import React, {useState} from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function StartNFinish() {// eslint-disable-next-line
    let [value1,setValue1]=useState('')// eslint-disable-next-line
    let [value2,setValue2]=useState('')

    function handleChange(e){
        e.target.name==='StartNFinish1'?setValue1(e.target.value):setValue2(e.target.value)
    }
    return (
        <div>
            <h2>START AND FINISH</h2>

            <h3>FIRST HEIGHT</h3>
            <label>LOW<input type='radio' name='StartNFinish1' value='l' onClick={handleChange}></input></label>
            <label>MED<input type='radio' name='StartNFinish1' value='m' onClick={handleChange}></input></label>
            <label>HIGH<input type='radio' name='StartNFinish1' value='h' onClick={handleChange}></input></label>
            <br/>
            <h3>SECOND HEIGHT</h3>
            <label>LOW<input type='radio' name='StartNFinish2' value='l' onClick={handleChange}></input></label>
            <label>MED<input type='radio' name='StartNFinish2' value='m' onClick={handleChange}></input></label>
            <label>HIGH<input type='radio' name='StartNFinish2' value='h' onClick={handleChange}></input></label>


            {getCharacterMoves.height.startNFinish.infoFunc()}
        </div>
    )
}
