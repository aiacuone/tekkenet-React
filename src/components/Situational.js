import React, {useState} from 'react'
import PlusOnBlock from './PlusOnBlock'
import PowerCrush from './PowerCrush'
import WallBounce from './WallBounce'
import Homing from './Homing'

export default function Situational() {
    let [plusOnBlock,setPlusOnBlock]    =useState(false)
    let [powerCrush,setPowerCrush]      =useState(false)
    let [wallBounce,setWallBounce]      =useState(false)
    let [homing,setHoming]              =useState(false)

    function handleClick(e){
        setPlusOnBlock  (false)
        setPowerCrush   (false)
        setWallBounce   (false)
        setHoming       (false)
        e.target.value==='plusOnBlock'  &&setPlusOnBlock(true)
        e.target.value==='powerCrush'   &&setPowerCrush (true)
        e.target.value==='wallBounce'   &&setWallBounce (true)
        e.target.value==='homing'       &&setHoming     (true)
    }

    let buttons=[
        <button onClick={handleClick} value='plusOnBlock'>   PLUS ON BLOCK   </button>,
        <button onClick={handleClick} value='powerCrush'>    POWERCRUSH      </button>,
        <button onClick={handleClick} value='wallBounce'>    WALLBOUNCE      </button>,
        <button onClick={handleClick} value='homing'>        HOMING          </button>
    ]
    return (
        <div>
            {buttons}
 
           {plusOnBlock  &&<PlusOnBlock />}
           {powerCrush   &&<PowerCrush />}
           {wallBounce   &&<WallBounce />}
           {homing       &&<Homing />}
        </div>
    )
}