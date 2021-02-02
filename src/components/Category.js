import React, {useState} from 'react'
import '../styles/category.css'

export default function Category(props) {
 
    function handleClick(category){
        // props.changeSelectionObj.setAttributes('')
        props.changeSelectionObj.setCategory(category)
        props.changeSelectionObj.setSubCategory('')
    }

    let categoryArr=['frames','height','knockdown','launch','rage','safety','situational','strings']

    let categoryButtons=categoryArr.map((item)=>{
        return <button class='categoryButton' onClick={()=>handleClick(item)}>{item.toUpperCase()}</button>
    })

    return (
        <div class='category'>
            {console.log(props.selectionObj.category)}
            {categoryButtons}
            
        </div>
    )
}
