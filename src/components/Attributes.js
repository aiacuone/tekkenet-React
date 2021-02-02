import React from 'react'
import FramesRange from './FramesRange'
import SpecificFrames from './SpecificFrames'
import SpecificHeight from './SpecificHeight'
import StartNFinish from './StartNFinish'

export default function Attributes(props) {
    return (
        <div class='attributes'>
            {props.selectionObj.subCategory=='Range'&&props.selectionObj.category=='frames'&&<FramesRange selectionObj={props.selectionObj} changeSelectionObj={props.changeSelectionObj}/>}
            {props.selectionObj.subCategory=='Specific'&&props.selectionObj.category=='frames'&&<SpecificFrames selectionObj={props.selectionObj} changeSelectionObj={props.changeSelectionObj}/>}
            {props.selectionObj.subCategory=='Specific'&&props.selectionObj.category=='height'&&<SpecificHeight selectionObj={props.selectionObj} changeSelectionObj={props.changeSelectionObj}/>}
            {props.selectionObj.subCategory=='Start&Finish'&&props.selectionObj.category=='height'&&<StartNFinish selectionObj={props.selectionObj} changeSelectionObj={props.changeSelectionObj}/>}

        </div>
    )
}
