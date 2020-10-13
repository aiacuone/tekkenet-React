import React, {useState} from 'react'
import ButtonLayer2 from './ButtonLayer2'

export default function ButtonLayer1({dropDownValue}) {
    let buttonValues= { 
        Height:['Specific Height','Start & Finish Height'],
        Launch:['Launchers','Launch On Counter'],
        Frames:['Specific Frame','Frame Range'],
        Knockdown:['Knockdown', 'Counter Knockdown'],
        Rage:['Rage Art','Rage Drive'],
        Safety:['Safe','Unsafe'],
        Situational:['+OnBlock','PowerCrush','Wall Bounce','Homing'],
        Strings:['Single','Dual','Tripple']          

    }
let [buttonLayer1Value,setButtonLayer1Value]=useState('')   
function handleClick(e){
    setButtonLayer1Value(e.target.value)
}

let buttons= Object.keys(buttonValues).map((value)=>{
return <button onClick={handleClick}value={value}>{value.toUpperCase()}</button>
})
    return (
        <div>
            {buttons}
            {buttonLayer1Value!==''&&<ButtonLayer2  buttonLayer1Value={buttonLayer1Value} buttonValues={buttonValues}dropDownValue={dropDownValue}/>}
        </div>
    )
}
