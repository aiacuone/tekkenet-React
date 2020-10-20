import React, {useState}    from 'react'
import CounterLaunch        from './CounterLaunch'
import NormalLaunch         from './NormalLaunch'




export default function Launch(props) {

    let [normalLaunch,setNormalLaunch]  =useState(false)
    let [counterLaunch,setCounterLaunch]=useState(false)

    function handleClick(e){
        setNormalLaunch (false)
        setCounterLaunch(false)
        e.target.value==='launch'       &&setNormalLaunch(true)
        e.target.value==='counterLaunch'&&setCounterLaunch(true)
    }

    let buttons=[
        <button onClick={handleClick} value='launch'>        LAUNCH          </button>,
        <button onClick={handleClick} value='counterLaunch'> COUNTER LAUNCH  </button>
    ]


    return (

        <div>

            {buttons}
 
           {normalLaunch    &&<NormalLaunch     dropDownValue={props.dropDownValue}/>}
           {counterLaunch   &&<CounterLaunch    dropDownValue={props.dropDownValue}/>}

        </div>
        
    )
}
