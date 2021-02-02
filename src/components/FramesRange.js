import React, {useEffect} from 'react'

export default function FramesRange(props) {

    function handleChange(e){
        e.target.name==='low'?props.changeSelectionObj.setAttribute1(e.target.value):props.changeSelectionObj.setAttribute2(e.target.value)
    }

    useEffect(()=>{
        props.changeSelectionObj.setAttribute1('')
        props.changeSelectionObj.setAttribute2('')
    },[])

    return (

        <div>
            <label>LOW  <input class='input'type='number' value={props.selectionObj.attribute1}   name='low'  min='9' onChange={handleChange}></input></label>
            <label>HIGH <input class='input' type='number' value={props.selectionObj.attribute2}  name='high' min='9' onChange={handleChange}></input></label>
        </div>
        
    )
}


