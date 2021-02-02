import React from 'react'

export default function Footer(props) {
    return (
        <div class='footer'>
            {props.selectionObj.character!==''&&<h1>{props.selectionObj.character.toUpperCase()+'/'}</h1>}
            {props.selectionObj.category!==''&&<h1>{props.selectionObj.category.toUpperCase()+'/'}</h1>}
            {props.selectionObj.subCategory!==''&&<h1>{props.selectionObj.subCategory.toUpperCase()+'/'}</h1>}
            {props.selectionObj.attribute1!==''&&<h1>{props.selectionObj.attribute1.toUpperCase()}</h1>}
            {props.selectionObj.attribute2!==''&&<h1>-{props.selectionObj.attribute2.toUpperCase()}</h1>}
        </div>
    )
}
