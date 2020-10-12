import React, {useState,useEffect} from 'react'

export default function firstButtonLayer(props) {


    let characterReferece= props.characterReference
    let layerArr=['Height','Launch','Frames','Knockdown','Rage','Safety','Situational','Strings']
    let layerOptions=layerArr.map((button)=>{
        return <button onClick={handleClick} value={button} className='firstLayerButton'>{button.toUpperCase()}</button>
    })
    function handleClick(){

    }
    return (
        <div>
            {layerOptions}
            
        </div>
    )
}
