import React, {useState} from 'react'
import RageArt from './RageArt'
import RageDrive from './RageDrive'

export default function Rage() {
    let [rageArt,setRageArt]    =useState(false)
    let [rageDrive,setRageDrive]=useState(false)

    function handleClick(e){
        setRageArt  (false)
        setRageDrive(false)
        e.target.value==='rageArt'      &&setRageArt(true)
        e.target.value==='rageDrive'    &&setRageDrive(true)
    }

    let buttons= [
        <button onClick={handleClick} value='rageArt'>   RAGE ART    </button>,
        <button onClick={handleClick} value='rageDrive'> RAGE DRIVE  </button>
    ]
    return (
        <div>
            {buttons}
 
           {rageArt    &&<RageArt />}
           {rageDrive  &&<RageDrive />}
        </div>
    )
}
