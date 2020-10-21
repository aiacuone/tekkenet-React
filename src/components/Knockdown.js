import React, {useState}    from 'react'
import NormalKnockdown      from './NormalKnockdown'
import CounterKnockdown     from './CounterKnockdown'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Knockdown(props) {

    let [normalKnockdown,setNormalKnockdown]    =useState(false)
    let [counterKnockdown,setCounterKnockdown]  =useState(false)
    
    function handleClick(e){
        setNormalKnockdown  (false)
        setCounterKnockdown (false)
        e.target.value==='knockdown'        &&setNormalKnockdown    (true)
        e.target.value==='counterKnockdown' &&setCounterKnockdown   (true)
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
                value='knockdown'           
                onClick={handleClick}
            >KNOCKDOWN         
            </button>

            <button 
                style={button2Style}
                onMouseEnter={  ()=>changeButton2Style('#d8e6ed')}
                onMouseOut={    ()=>changeButton2Style('#e8f5fc')}  
                value='counterKnockdown'    
                onClick={handleClick}
            >COUNTER KNOCKDOWN 
            </button>

            {normalKnockdown&&  <NormalKnockdown    dropDownValue={props.dropDownValue}/>}
            {counterKnockdown&& <CounterKnockdown   dropDownValue={props.dropDownValue}/>}

        </div>
        
    )
}
