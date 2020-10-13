import React, {useState} from 'react'

export default function SpecificFrame() {
    let [value,setValue]=useState('')
    function handleChange(e){
        setValue(e.target.value)
    }
    return (
        <div>
            <h1>SPECIFIC FRAME</h1>
            <input type='number' onChange={handleChange} value={value}></input>
        </div>
    )
}
 {/* Specific Frame */}
//  {props.secondLayerInput==='Specific Frame'&& 
//  <div>
//      <input type='number' name='Specific Frame' onChange={handleChange} min='0' value={specificFrame}></input>
//      {specificFrame !=='' && <Table secondLayerInput={props.secondLayerInput} specificFrame={specificFrame}/>}
//  </div>}