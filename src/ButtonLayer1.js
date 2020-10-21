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
        margin:         '5px',
        borderRadius:   '50px',
        padding:        '10px 40px 10px 40px',
        background:     'none',
        border:         'none',
        backgroundColor:'#e9f1f2'
    }

    let [button1Style,setButton1Style]=useState(buttonStyle)
    let [button2Style,setButton2Style]=useState(buttonStyle)
    let [button3Style,setButton3Style]=useState(buttonStyle)
    let [button4Style,setButton4Style]=useState(buttonStyle)
    let [button5Style,setButton5Style]=useState(buttonStyle)
    let [button6Style,setButton6Style]=useState(buttonStyle)
    let [button7Style,setButton7Style]=useState(buttonStyle)
    let [button8Style,setButton8Style]=useState(buttonStyle)

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

        function changeButton3Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton3Style(newButton)
        }

        function changeButton4Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton4Style(newButton)
        }
        function changeButton5Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton5Style(newButton)
        }

        function changeButton6Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton6Style(newButton)
        }

        function changeButton7Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton7Style(newButton)
        }

        function changeButton8Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton8Style(newButton)
        }

    return (
        <div>

            <br/>

            <button 
                style={button1Style}
                onMouseEnter={  ()=>changeButton1Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton1Style('#e9f1f2')}   
                onClick={newState} 
                value='frames' 
            >     FRAMES      
            </button>

            <button 
                style={button2Style}
                onMouseEnter={  ()=>changeButton2Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton2Style('#e9f1f2')}   
                onClick={newState} 
                value='height'
            >      HEIGHT      
            </button>

            <button 
                style={button3Style}
                onMouseEnter={  ()=>changeButton3Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton3Style('#e9f1f2')}   
                onClick={newState} 
                value='knockdown'
            >   KNOCKDOWN   
            </button>

            <button 
                style={button4Style}
                onMouseEnter={  ()=>changeButton4Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton4Style('#e9f1f2')}   
                onClick={newState} 
                value='launch'
            >      LAUNCH      
            </button>

            <button 
                style={button5Style}
                onMouseEnter={  ()=>changeButton5Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton5Style('#e9f1f2')}   
                onClick={newState} 
                value='rage'
            >        RAGE        
            </button>

            <button 
                style={button6Style}
                onMouseEnter={  ()=>changeButton6Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton6Style('#e9f1f2')}   
                onClick={newState} 
                value='safety'
            >      SAFETY      
            </button>

            <button 
                style={button7Style}
                onMouseEnter={  ()=>changeButton7Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton7Style('#e9f1f2')}   
                onClick={newState} 
                value='situational'
            > SITUATIONAL 
            </button>

            <button 
                style={button8Style}
                onMouseEnter={  ()=>changeButton8Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton8Style('#e9f1f2')}   
                onClick={newState} 
                value='strings'
            >     STRINGS     
            </button>

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
