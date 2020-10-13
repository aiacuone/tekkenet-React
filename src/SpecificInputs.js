import React, {useState} from 'react'

export default function SpecificInputs(props) {

// let [input,setInput]= useState(props.secondLayerInput)

/** INFORMATION useState HOOKS **/
let [startNFinish1, setStartNFinish1] =useState('')
let [startNFinish2, setStartNFinish2] =useState('')
let [specificHeightValue, setSpecificHeightValue] =useState('')
let [specificFrame, setSpecificFrame] =useState('')
let [frameRangeValue1, setFrameRangeValue1] =useState('')
let [frameRangeValue2, setFrameRangeValue2] =useState('')

function handleChange(e){
    let targetName=e.target.name

    if(targetName==='Specific Height'){
        setSpecificHeightValue(e.target.value)
    }else if(targetName==='StartNFinish1'){ 
        setStartNFinish1(e.target.value)
    }else if(targetName==='StartNFinish2'){
        setStartNFinish2(e.target.value)
    }else if(targetName==='Specific Frame'){
        setSpecificFrame(e.target.value)
    }else if(targetName==='frameRangeValue1'){
        setFrameRangeValue1(e.target.value)
    }else if(targetName==='frameRangeValue2'){
        setFrameRangeValue2(e.target.value)
    }
}

/** startNFinish Inputs**/
let startNFinishArr=['StartNFinish1','StartNFinish2']
let startNFinishInputs = startNFinishArr.map((item)=>{
     return item==='StartNFinish1'?
     <form>
         <h3>FIRST HEIGHT</h3>
         <label>LOW<input type='radio' name='StartNFinish1' value='l' onClick={handleChange}></input></label>
         <label>MED<input type='radio' name='StartNFinish1' value='m' onClick={handleChange}></input></label>
         <label>HIGH<input type='radio' name='StartNFinish1' value='h' onClick={handleChange}></input></label>
     </form>
     :  
     <form><br/><h3>SECOND HEIGHT</h3>
        <label>LOW<input type='radio' name='StartNFinish2' value='l' onClick={handleChange}></input></label>
        <label>MED<input type='radio' name='StartNFinish2' value='m' onClick={handleChange}></input></label>
        <label>HIGH<input type='radio' name='StartNFinish2' value='h' onClick={handleChange}></input></label>
     </form>
})

/** specificHeight **/
let specificHeight= 
<form>
    <label>LOW<input type='radio' name='Specific Height' value='l' onClick={handleChange}></input></label>
    <label>MED<input type='radio' name='Specific Height' value='m' onClick={handleChange}></input></label>
    <label>HIGH<input type='radio' name='Specific Height' value='h' onClick={handleChange}></input></label>
</form>

let frameRange= 
    <form>
        <label>FIRST FRAME<input type='number' name='frameRangeValue1' onChange={handleChange} min='0' value={frameRangeValue1}></input></label>
        <label>LAST FRAME<input type='number' name='frameRangeValue2' onChange={handleChange} min='0' value={frameRangeValue2}></input></label>
    </form>
    return (
        <div>
            <h1>{props.secondLayerInput.toUpperCase()}</h1>
            
            {/* Specific Height */}
            {props.secondLayerInput==='Specific Height'&& specificHeight}
            
            {/* Start & Finish Height */}
            {props.secondLayerInput==='Start & Finish Height'&&
                    <form>
                        {startNFinishInputs}
                    <h3>{startNFinish1 !=='' && startNFinish2!==''? <h1>startNFinish works!</h1>:null}</h3>
                </form>
            }

            {/* Specific Frame */}
            {props.secondLayerInput==='Specific Frame'&& <input type='number' name='Specific Frame' onChange={handleChange} min='0' value={specificFrame}></input>}

            {/** Frame Range **/}
            {props.secondLayerInput==='Frame Range'&& 
            <div>
                {frameRange}
                {frameRangeValue1!==''&& frameRangeValue2!=='' && 'Frame Range Works!' }
            </div>}
            
        </div>
    )
}
