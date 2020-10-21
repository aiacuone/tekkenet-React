import React, {useState}    from 'react'
import RageArt              from './RageArt'
import RageDrive            from './RageDrive'




export default function Rage(props) {

    let [rageArt,setRageArt]    =useState(false)
    let [rageDrive,setRageDrive]=useState(false)

    function handleClick(e){
        setRageArt  (false)
        setRageDrive(false)
        e.target.value==='rageArt'      &&setRageArt(true)
        e.target.value==='rageDrive'    &&setRageDrive(true)
    }

    let buttonStyle={
        margin:         '5px',
        borderRadius:   '20px',
        padding:        '10px 20px 10px 20px',
        background:     'none',
        border:         '.5px solid black',
        boxShadow:      '2px 2px 5px rgb(209, 209, 209)',
        backgroundColor:'#e8f5fc'
    }

    let [button1Style,setButton1Style]=useState(buttonStyle)
    let [button2Style,setButton2Style]=useState(buttonStyle)

        function changeButton1Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton1Style(newButton)
        }

        function changeButton2Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton2Style(newButton)
        }

    return (

        <div>
 
            <button 
                style={button1Style}
                onMouseEnter={  ()=>changeButton1Style('#d8e6ed')}
                onMouseOut={    ()=>changeButton1Style('#e8f5fc')} 
                onClick={handleClick} 
                value='rageArt'
            >RAGE ART    
            </button>
            <button 
                style={button2Style}
                onMouseEnter={  ()=>changeButton2Style('#d8e6ed')}
                onMouseOut={    ()=>changeButton2Style('#e8f5fc')} 
                onClick={handleClick} 
                value='rageDrive'
            >RAGE DRIVE  
            </button>

           {rageArt    &&<RageArt   dropDownValue={props.dropDownValue}/>}
           {rageDrive  &&<RageDrive dropDownValue={props.dropDownValue}/>}

        </div>
        
    )
}
