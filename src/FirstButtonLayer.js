import React, {useState,useEffect,useRef} from 'react'
import SpecificInputs from './SpecificInputs'


export default function FirstButtonLayer(props) {
    let character=props.character
    
    let secondLayerObj= { 
        Height:['Specific Height','Start & Finish Height'],
        Launch:['Launchers','Launch On Counter'],
        Frames:['Specific Frame','Frame Range'],
        Knockdown:['Knockdown', 'Counter Knockdown'],
        Rage:['Rage Art','Rage Drive'],
        Safety:['Safe','Unsafe'],
        Situational:['+OnBlock','PowerCrush','Wall Bounce','Homing'],
        Strings:['Single','Dual','Tripple']          
                        }
    let firstButtonLayer=Object.keys(secondLayerObj).map((button)=>{
        return <button onClick={handleClick} value={button} className='firstLayerButton'>{button.toUpperCase()}</button>
    })

    let [secondButton,setSecondButton]=useState('') 

    function handleClick(e){
        setSecondButton(secondLayerObj[e.target.value])
    }
   
    let [secondLayerButtons, setSecondLayerButtons] = useState('')
    const isInitialMount = useRef(true);
    
    let [secondLayerInput, setSecondLayerInput] = useState('')
    
    function handleClick2(e){
        setSecondLayerInput(e.target.value)
    }

    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setSecondLayerButtons (
                secondButton.map((button)=>{
                return <button onClick={handleClick2} value={button}>{button.toUpperCase()}</button>
                })
            )
        }
    },[secondButton])

  
    return (
        <div>
            <br/>
            {firstButtonLayer}
            <br/>
            <br/>
            {secondLayerButtons===''? null: secondLayerButtons}
            <br/>
            <br/>
            {secondLayerInput==''?null: <SpecificInputs secondLayerInput={secondLayerInput} character={character}/>}
            {/* <SpecificInputs secondLayerInput={secondLayerInput} character={character} handleClick={handleClick2}/> */}
            
        </div>
    )
}
