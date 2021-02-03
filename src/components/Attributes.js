import React from 'react'
import FramesRange from './FramesRange'
import SpecificFrames from './SpecificFrames'
import SpecificHeight from './SpecificHeight'
import StartNFinish from './StartNFinish'

export default function Attributes(props) {

    let category=props.selectionObj.category

    return (
        <div class='attributes'>
            {props.selectionObj.subCategory=='framesRange'&&props.selectionObj.category=='frames'&&<FramesRange selectionObj={props.selectionObj} changeSelectionObj={props.changeSelectionObj}/>}
            {props.selectionObj.subCategory=='specificFrames'&&props.selectionObj.category=='frames'&&<SpecificFrames selectionObj={props.selectionObj} changeSelectionObj={props.changeSelectionObj}/>}
            {props.selectionObj.subCategory=='specificHeight'&&props.selectionObj.category=='height'&&<SpecificHeight selectionObj={props.selectionObj} changeSelectionObj={props.changeSelectionObj}/>}
            {props.selectionObj.subCategory=='startNFinish'&&props.selectionObj.category=='height'&&<StartNFinish selectionObj={props.selectionObj} changeSelectionObj={props.changeSelectionObj}/>}

        </div>
    )
}
