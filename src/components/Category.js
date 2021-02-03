import React from 'react'
import '../styles/category.css'

export default function Category(props) {
    

    function handleClick(category){
        props.changeSelectionObj.setAttribute1('')
        props.changeSelectionObj.setAttribute2('')
        props.changeSelectionObj.setSubCategory('')
        props.changeSelectionObj.setCategory(category)
    }

    let categoryArr=['frames','height','knockdown','launch','rage','safety','situational','strings']

    let categoryButtons=categoryArr.map((item)=>{
        return <button  style={{background:item==props.selectionObj.category&&'grey'}} class='categoryButton' onClick={()=>handleClick(item)}>{item.toUpperCase()}</button>
    })

    return (
        <div class='category'>
            {categoryButtons}
        </div>
    )
}
