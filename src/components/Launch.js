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
                value='launch'
            >LAUNCH          
            </button>

            <button 
                style={button2Style}
                onMouseEnter={  ()=>changeButton2Style('#d8e6ed')}
                onMouseOut={    ()=>changeButton2Style('#e8f5fc')} 
                onClick={handleClick} 
                value='counterLaunch'
            >COUNTER LAUNCH  
            </button>
           
           {normalLaunch    &&<NormalLaunch     dropDownValue={props.dropDownValue}/>}
           {counterLaunch   &&<CounterLaunch    dropDownValue={props.dropDownValue}/>}

        </div>
        
    )
}
