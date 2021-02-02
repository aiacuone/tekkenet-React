import React, {useEffect}    from 'react'

export default function SpecificFrames(props) {

    function handleChange(e){
        props.changeSelectionObj.setAttribute1(e.target.value)
    }

    useEffect(()=>{
        props.changeSelectionObj.setAttribute1('')
    },[])
   
    return (
        <div>
            <input class='input' type='number' onChange={handleChange} value={props.selectionObj.attribute1}></input>
        </div>
        
    )
}