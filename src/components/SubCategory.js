import React from 'react'
import '../styles/subCategory.css'

export default function SubCategory(props) {

    let subCategoryObj={
        frames:['Range','Specific'],
        height:['Specific','Start&Finish'],
        knockdown:['Normal','Counter'],
        launch:['Normal','Counter'],
        rage:['Rage Art','Rage Drive'],
        safety:['Safe','Unsafe'],
        situational:['+On Block','Power Crush','Wall Bounce','Homing'],
        strings:['Single','Double','Tripple']
    }

    let subCategoryButtons=null

    if(props.selectionObj.category!==''){
         subCategoryButtons=subCategoryObj[props.selectionObj.category].map((item)=>{
        return <button class='categoryButton' value={item} onClick={()=>props.changeSelectionObj.setSubCategory(item)}>{item.toUpperCase()}</button>
    })
}

    return (
        <div class='subCategory'>
            {console.log(props.selectionObj.subCategory)}
            {props.selectionObj.category!==''&&(
                <div class='subCategoryContainer'>
                    {/* <h1 class='subCategoryHeader'>{props.selectionObj.category.toUpperCase()}</h1> */}
                    <div class='subCategoryButtonContainer'>{subCategoryButtons}</div>
                </div>)}
        </div>
    )
}
