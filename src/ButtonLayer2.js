import React, {useState} from 'react'
import NonSpecificInputs from './NonSpecificInputs'
import SpecificInputs from './SpecificInputs'


export default function ButtonLayer2({getCharacterMoves,buttonLayer1Value,dropDownValue}) {

    let [noSpecificButtonValue,setNoSpecificButtonValue]=useState('')
    let [specificButtonValue,setSpecificButtonValue]=useState('')

    function handleClick(e){
        setNoSpecificButtonValue('')
        setSpecificButtonValue('')
        console.log(e.target.value)
        e.target.value!=='specificHeight'&&e.target.value!=='startNFinish'&&e.target.value!=='specificFrames'&&e.target.value!=='framesRange'?setNoSpecificButtonValue(e.target.value):setSpecificButtonValue(e.target.value)
    }

    let buttonLayer2=Object.keys(getCharacterMoves[buttonLayer1Value]).map((value)=>{
        return <button value={value} onClick={handleClick}>{value.toUpperCase()}</button>
    })

    return (
        <div>
            {buttonLayer2}
            {noSpecificButtonValue!==''&&<NonSpecificInputs id='nonSpecificContainer' value={noSpecificButtonValue} dropDownValue={dropDownValue}/>}
            {specificButtonValue!==''&&<SpecificInputs value={specificButtonValue} dropDownValue={dropDownValue}/>}
        </div>
    )
}
