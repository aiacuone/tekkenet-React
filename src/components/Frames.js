import React, {useState}    from 'react'
import FramesRange          from './FramesRange'
import SpecificFrames       from './SpecificFrames'




export default function Frames(props) {

    let [framesRange,setFramesRange]        =useState(false)
    let [specificFrames,setSpecificFrames]  =useState(false)
    
    function handleClick(e){
        setFramesRange      (false)
        setSpecificFrames   (false)
        e.target.value==='framesRange'      &&setFramesRange    (true)
        e.target.value==='specificFrames'   &&setSpecificFrames (true)
    }

    let buttonStyle={
        margin:         '5px',
        borderRadius:   '20px',
        padding:        '10px 20px 10px 20px',
        background:     'none',
        border:         'none',
        backgroundColor:'#e9f1f2'
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

            <br/>
            
            <button
                name='button1' 
                style={button1Style}
                onMouseEnter={  ()=>changeButton1Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton1Style('#e9f1f2')} 
                value='framesRange'     
                onClick={handleClick}
            >FRAMES RANGE      
            </button>

            <button 
                style={button2Style}
                onMouseEnter={  ()=>changeButton2Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton2Style('#e9f1f2')} 
                value='specificFrames'  
                onClick={handleClick}
            >SPECIFIC FRAMES   
            </button>

            {framesRange    &&<FramesRange      dropDownValue={props.dropDownValue}/>}
            {specificFrames &&<SpecificFrames   dropDownValue={props.dropDownValue}/>}

        </div>
        
    )
}

