import React from 'react'

export default function Footer(props) {
    return (
        <div class='footer'>
            {props.selectionObj.character!==''&&<h4>{props.selectionObj.character.toUpperCase()+'/'}</h4>}
            {props.selectionObj.category!==''&&<h4>{props.selectionObj.category.toUpperCase()+'/'}</h4>}
            {props.selectionObj.subCategory!==''&&<h4>{props.selectionObj.subCategory.toUpperCase()+'/'}</h4>}

        </div>
    )
}
