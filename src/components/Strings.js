import React, {useState} from 'react'
import SingleString from './SingleString'
import DualString from './DualString'
import TrippleString from './TrippleString'

export default function Strings() {
    let [single,setSingle]      =useState(false)
    let [dual,setDual]          =useState(false)
    let [tripple,setTripple]    =useState(false)

    function handleClick(e){
        setSingle   (false)
        setDual     (false)
        setTripple  (false)
        e.target.value==='single'       &&setSingle(true)
        e.target.value==='dual'         &&setDual(true)
        e.target.value==='tripple'      &&setTripple(true)
    }

    let buttons=[
        <button onClick={handleClick} value='single'>    SINGLE BLOCK    </button>,
        <button onClick={handleClick} value='dual'>      DUAL            </button>,
        <button onClick={handleClick} value='tripple'>   TRIPPLE         </button>
    ]
    return (
        <div>
            {buttons}
 
           {single  &&<SingleString />}
           {dual    &&<DualString />}
           {tripple &&<TrippleString />}
        </div>
    )
}
