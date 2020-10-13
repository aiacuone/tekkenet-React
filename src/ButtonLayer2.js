import React, {useState} from 'react'
import NonSpecificInput from './NonSpecificInput'
import SpecificInput from './SpecificInput'

export default function ButtonLayer2({buttonLayer1Value,buttonValues}) {
    
    let [noSpecificButtonValue,setNoSpecificButtonValue]=useState('')
    let [specificButtonValue,setSpecificButtonValue]=useState('')

    function handleClick(e){
        setNoSpecificButtonValue('')
        setSpecificButtonValue('')
        e.target.value!=='Specific Height'&&e.target.value!=='Start & Finish Height'&&e.target.value!=='Specific Frame'&&e.target.value!=='Frame Range'?setNoSpecificButtonValue(e.target.value):setSpecificButtonValue(e.target.value)
    }

    let buttonLayer2=buttonValues[buttonLayer1Value].map((value)=>{
    return <button value={value} onClick={handleClick}>{value.toUpperCase()}</button>
    })

    return (
        <div>
            {buttonLayer2}
            {noSpecificButtonValue!==''&&<NonSpecificInput value={noSpecificButtonValue} />}
            {specificButtonValue!==''&&<SpecificInput value={specificButtonValue} />}
        </div>
    )
}
