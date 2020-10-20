import React, {useState}    from 'react'
import NormalKnockdown      from './NormalKnockdown'
import CounterKnockdown     from './CounterKnockdown'




export default function Knockdown(props) {

    let [normalKnockdown,setNormalKnockdown]    =useState(false)
    let [counterKnockdown,setCounterKnockdown]  =useState(false)
    
    function handleClick(e){
        setNormalKnockdown  (false)
        setCounterKnockdown (false)
        e.target.value==='knockdown'        &&setNormalKnockdown    (true)
        e.target.value==='counterKnockdown' &&setCounterKnockdown   (true)
    }

    let buttons =[
        <button value='knockdown'           onClick={handleClick}>KNOCKDOWN         </button>,
        <button value='counterKnockdown'    onClick={handleClick}>COUNTER KNOCKDOWN </button>
    ]
    return (
        <div>
            {buttons}

            {normalKnockdown&&  <NormalKnockdown    dropDownValue={props.dropDownValue}/>}
            {counterKnockdown&& <CounterKnockdown   dropDownValue={props.dropDownValue}/>}

        </div>
    )
}
