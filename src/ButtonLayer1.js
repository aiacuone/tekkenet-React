import React, {useState} from 'react'
import Frames from './components/Frames'
import Height from './components/Height'
import Knockdown from './components/Knockdown'
import Launch from './components/Launch'
import Rage from './components/Rage'
import Safety from './components/Safety'
import Situational from './components/Situational'
import Strings from './components/Strings'


export default function ButtonLayer1(props) {

let [frames,        setFrames]      =useState('')
let [height,        setHeight]      =useState('') 
let [knockdown,     setKnockdown]   =useState('') 
let [launch,        setLaunch]      =useState('') 
let [rage,          setRage]        =useState('') 
let [safety,        setSafety]      =useState('') 
let [situational,   setSituational] =useState('') 
let [strings,       setStrings]     =useState('')    


function newState(e){

    setFrames       (false)
    setHeight       (false)
    setKnockdown    (false)
    setLaunch       (false)
    setRage         (false)
    setSafety       (false)
    setSituational  (false)
    setStrings      (false)

    let setState=''

e.target.value==='frames'       &&setFrames     (true)
e.target.value==='height'       &&setHeight     (true)
e.target.value==='knockdown'    &&setKnockdown  (true)
e.target.value==='launch'       &&setLaunch     (true)
e.target.value==='rage'         &&setRage       (true)
e.target.value==='safety'       &&setSafety     (true)
e.target.value==='situational'  &&setSituational(true)
e.target.value==='strings'      &&setStrings    (true)

return setState

}

    let buttonStyle={
        fontFamily:'Segoe UI',
        borderRadius:'5px',
        boxShadow:0
    }
    let buttons=[
        <button style={buttonStyle} onClick={newState} value='frames'>      FRAMES      </button>,
        <button style={buttonStyle} onClick={newState} value='height'>      HEIGHT      </button>,
        <button style={buttonStyle} onClick={newState} value='knockdown'>   KNOCKDOWN   </button>,
        <button style={buttonStyle} onClick={newState} value='launch'>      LAUNCH      </button>,
        <button style={buttonStyle} onClick={newState} value='rage'>        RAGE        </button>,
        <button style={buttonStyle} onClick={newState} value='safety'>      SAFETY      </button>,
        <button style={buttonStyle} onClick={newState} value='situational'> SITUATIONAL </button>,
        <button style={buttonStyle} onClick={newState} value='strings'>     STRINGS     </button>]


    return (
        
        <div>
            
            {buttons}

            {frames     &&<Frames       dropDownValue={props.dropDownValue}/>}
            {height     &&<Height       dropDownValue={props.dropDownValue}/>}
            {knockdown  &&<Knockdown    dropDownValue={props.dropDownValue}/>}
            {launch     &&<Launch       dropDownValue={props.dropDownValue}/>}
            {rage       &&<Rage         dropDownValue={props.dropDownValue}/>}
            {safety     &&<Safety       dropDownValue={props.dropDownValue}/>}
            {situational&&<Situational  dropDownValue={props.dropDownValue}/>}
            {strings    &&<Strings      dropDownValue={props.dropDownValue}/>}

        </div>
    )
}
