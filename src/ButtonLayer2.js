import React, {useState} from 'react'
import SpecificInputs from './SpecificInputs'
import characters from './characters'
import getCharacterMoves from './getCharacterMoves'

export default function ButtonLayer2({getCharacterMoves,buttonLayer1Value,dropDownValue}) {

    let [noSpecificButtonValue,setNoSpecificButtonValue]=useState('')
    let [specificButtonValue,setSpecificButtonValue]=useState('')

    function handleClick(e){
        setNoSpecificButtonValue('')
        setSpecificButtonValue('')
        e.target.value!=='specificHeight'&&e.target.value!=='startNFinish'&&e.target.value!=='specificFrames'&&e.target.value!=='framesRange'?setNoSpecificButtonValue(e.target.value):setSpecificButtonValue(e.target.value)
    }

    let buttonLayer2=Object.keys(getCharacterMoves[buttonLayer1Value]).map((value)=>{
        return <button value={value} onClick={handleClick}>{value.toUpperCase()}</button>
    })
    // console.log(characters[dropDownValue].moveList)//moveList

    // console.log(buttonLayer1Value)
    // console.log(getCharacterMoves)
    // console.log(noSpecificButtonValue)
    // console.log(getCharacterMoves.Safety.unSafe)
    // console.log(buttonLayer1Value)
    // console.log(noSpecificButtonValue)
    return (
        <div>
            {buttonLayer2}
            





            {noSpecificButtonValue!==''&&null}
            {specificButtonValue!==''&&<SpecificInputs value={specificButtonValue} dropDownValue={dropDownValue}/>}
        </div>
    )
}
