import React, {useState}    from 'react'
import PlusOnBlock          from './PlusOnBlock'
import PowerCrush           from './PowerCrush'
import WallBounce           from './WallBounce'
import Homing               from './Homing'


export default function Situational(props) {

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
    let [button3Style,setButton3Style]=useState(buttonStyle)
    let [button4Style,setButton4Style]=useState(buttonStyle)

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
        
    return (

        <div>

            <button 
                style={button1Style}
                onMouseEnter={  ()=>changeButton1Style('#d8e6ed')}
                onMouseOut={    ()=>changeButton1Style('#e8f5fc')}  
                onClick={handleClick} 
                value='plusOnBlock'
            >PLUS ON BLOCK   
            </button>
            <button 
                style={button2Style}
                onMouseEnter={  ()=>changeButton2Style('#d8e6ed')}
                onMouseOut={    ()=>changeButton2Style('#e8f5fc')}  
                onClick={handleClick} 
                value='powerCrush'
            >POWERCRUSH      
            </button>
            <button 
                style={button3Style}
                onMouseEnter={  ()=>changeButton3Style('#d8e6ed')}
                onMouseOut={    ()=>changeButton3Style('#e8f5fc')}  
                onClick={handleClick} 
                value='wallBounce'
            >WALLBOUNCE      
            </button>
            <button 
                style={button4Style}
                onMouseEnter={  ()=>changeButton4Style('#d8e6ed')}
                onMouseOut={    ()=>changeButton4Style('#e8f5fc')}  
                onClick={handleClick} 
                value='homing'
            >HOMING          
            </button>

           {plusOnBlock  &&<PlusOnBlock dropDownValue={props.dropDownValue}/>}
           {powerCrush   &&<PowerCrush  dropDownValue={props.dropDownValue}/>}
           {wallBounce   &&<WallBounce  dropDownValue={props.dropDownValue}/>}
           {homing       &&<Homing      dropDownValue={props.dropDownValue}/>}

        </div>

    )
}