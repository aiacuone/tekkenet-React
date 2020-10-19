import React, {useState} from 'react'
import ButtonLayer2 from './ButtonLayer2'
import getCharacterMoves from './getCharacterMoves'


export default function ButtonLayer1({dropDownValue}) {

let [buttonLayer1Value,setButtonLayer1Value]=useState('')   
function handleClick(e){
    setButtonLayer1Value(e.target.value)
}

let buttons= Object.keys(getCharacterMoves).map((value)=>{
return <button onClick={handleClick}value={value}>{value.toUpperCase()}</button>
})


    return (
        <div>
            {buttons}
            {buttonLayer1Value!==''&&<ButtonLayer2 buttonLayer1Value={buttonLayer1Value}dropDownValue={dropDownValue}/>}
        </div>
    )
}
