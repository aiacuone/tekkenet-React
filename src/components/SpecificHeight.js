import React, {useState} from 'react'
import SpecificHeightTable from './SpecificHeightTable'





export default function SpecificHeight(props) {
    
    let [low,setLow]=useState(false)
    let [med,setMed]=useState(false) 
    let [high,setHigh]=useState(false)  
    
    function handleChange(e){
        setLow(false)
        setMed(false)
        setHigh(false)

        e.target.value==='low'&&setLow(true)
        e.target.value==='med'&&setMed(true)
        e.target.value==='high'&&setHigh(true)
    }
    
    return (
        <div>
            
            <h3>SPECIFIC HEIGHT</h3>
            <label>LOW<input    type='radio' value='low'    name='height' onChange={handleChange}></input></label>
            <label>MED<input    type='radio' value='med'    name='height' onChange={handleChange}></input></label>
            <label>HIGH<input   type='radio' value='high'   name='height' onChange={handleChange}></input><br/></label>

            {low    &&<SpecificHeightTable height='l' dropDownValue={props.dropDownValue} />}
            {med    &&<SpecificHeightTable height='m' dropDownValue={props.dropDownValue} />}
            {high   &&<SpecificHeightTable height='h' dropDownValue={props.dropDownValue} />}

        </div>
    )
}
