import React, {useEffect} from 'react'

export default function SpecificHeight(props) {
    
    function handleChange(e){
        props.changeSelectionObj.setAttribute1(e.target.value)
    }
    
    useEffect(()=>{
        props.changeSelectionObj.setAttribute1('')
    },[])

    return (

        <div>
            <label>LOW<input    type='radio' value='l'  name='height' onChange={handleChange}></input></label>
            <label>MED<input    type='radio' value='m'  name='height' onChange={handleChange}></input></label>
            <label>HIGH<input   type='radio' value='h'  name='height' onChange={handleChange}></input><br/></label>
        </div>
        
    )
}
