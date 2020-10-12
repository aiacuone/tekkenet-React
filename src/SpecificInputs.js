import React, {useState} from 'react'

export default function SpecificInputs(props) {

let [input,setInput]= useState('')


function handleChange(e){
 setInput(e.target.value)

}
/** startNFinish **/
let [startNFinish1, setStartNFinish1] =useState('')
let [startNFinish2, setStartNFinish2] =useState('')

function startNFinish(e){
    e.target.name==='StartNFinish1'? setStartNFinish1(e.target.value):setStartNFinish2(e.target.value)
 }
    return (
        <div>
            

            {props.specificInput==='Specific Height'&&<input onChange={handleChange} type='number'></input>}
            {props.specificInput==='Start & Finish Height'&&
                <form>
                    <input 
                        onChange={startNFinish} 
                        name='StartNFinish1'
                        type='number'>
                    </input>
                    <input 
                        onChange={startNFinish} 
                        name='StartNFinish2'
                        type='number'>
                    </input>
                </form>
            }
            {startNFinish1 !=='' && startNFinish2!==''? <h1>startNFinish works!</h1>:null}
        </div>
    )
}
