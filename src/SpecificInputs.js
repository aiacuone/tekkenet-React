import React, {useState} from 'react'

export default function SpecificInputs(props) {

// let [input,setInput]= useState(props.secondLayerInput)

/** INFORMATION useState HOOKS **/
let [startNFinish1, setStartNFinish1] =useState('')
let [startNFinish2, setStartNFinish2] =useState('')
let [specificHeightValue, setSpecificHeightValue] =useState('')

function handleChange(e){
let targetName=e.target.name
targetName==='Specific Height'&& setSpecificHeightValue(e.target.value)
 
 if(targetName==='StartNFinish1'){ 
     setStartNFinish1(e.target.value)
    }else if(targetName==='StartNFinish2'){
        setStartNFinish2(targetName)
    }


}


    return (
        <div>
            <h1>{props.secondLayerInput.toUpperCase()}</h1>
            {props.secondLayerInput==='Specific Height'&&<input value={specificHeightValue} name='Specific Height' onChange={handleChange} type='number'></input>}
            {props.secondLayerInput==='Start & Finish Height'&&
                
                    <form>
                    <input 
                        onChange={handleChange} 
                        name='StartNFinish1'
                        type='number'>
                    </input>
                    <input 
                        onChange={handleChange} 
                        name='StartNFinish2'
                        type='number'>
                    </input>
                    <h3>{startNFinish1 !=='' && startNFinish2!==''? <h1>startNFinish works!</h1>:null}</h3>
                </form>
            }
        </div>
    )
}
