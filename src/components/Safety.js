import React, {useState} from 'react'
import Safe from './Safe'
import Unsafe from './Unsafe'




export default function Safety(props) {

    let [safe,setSafe]      =useState(false)
    let [unsafe,setUnsafe]  =useState(false)

    function handleClick(e){
        setSafe     (false)
        setUnsafe   (false)
        e.target.value==='safe'     &&setSafe   (true)
        e.target.value==='unsafe'   &&setUnsafe (true)
    }

    let buttons =[
        <button onClick={handleClick} value='safe'>   SAFE    </button>,
        <button onClick={handleClick} value='unsafe'> UNSAFE  </button>
    ]


    return (

        <div>

           {buttons}
 
           {safe    &&<Safe     dropDownValue={props.dropDownValue}/>}
           {unsafe  &&<Unsafe   dropDownValue={props.dropDownValue}/>}

        </div>
        
    )
}