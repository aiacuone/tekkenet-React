import React, {useState,useEffect} from 'react'
import '../styles/category.css'

export default function Category(props) {
 
    let [frames, setFrames]=useState({})
    let [height, setHeight]=useState({})
    let [knockdown, setKnockdown]=useState({})
    let [launch, setLaunch]=useState({})
    let [rage, setRage]=useState({})
    let [safety, setSafety]=useState({})
    let [situational, setSituational]=useState({})
    let [strings, setStrings]=useState({})

    let style={
        frames:frames,
        height:height,
        knockdown:knockdown,
        launch:launch,
        rage:rage,
        safety:safety,
        situational:situational,
        strings:strings,
    }

    function handleClick(category){

        props.changeSelectionObj.setAttribute1('')
        props.changeSelectionObj.setAttribute2('')
        props.changeSelectionObj.setSubCategory('')
        props.changeSelectionObj.setCategory(category)

        category==='frames'?setFrames({background:'grey'}):setFrames({})
        category==='height'?setHeight({background:'grey'}):setHeight({})
        category==='knockdown'?setKnockdown({background:'grey'}):setKnockdown({})
        category==='launch'?setLaunch({background:'grey'}):setLaunch({})
        category==='rage'?setRage({background:'grey'}):setRage({})
        category==='safety'?setSafety({background:'grey'}):setSafety({})
        category==='situational'?setSituational({background:'grey'}):setSituational({})
        category==='strings'?setStrings({background:'grey'}):setStrings({})
        
    }

    let categoryArr=['frames','height','knockdown','launch','rage','safety','situational','strings']

    let categoryButtons=categoryArr.map((item)=>{
        return <button  style={style[item]} class='categoryButton' onClick={()=>handleClick(item)}>{item.toUpperCase()}</button>
    })


    return (
        <div class='category'>
            {categoryButtons}
        </div>
    )
}
