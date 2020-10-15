
import React from 'react'
import SpecificHeight from './specificInputs/SpecificHeight'
import StartNFinish from './specificInputs/StartNFinish'
import SpecificFrame from './specificInputs/SpecificFrame'
import FrameRange from './specificInputs/FrameRange'

export default function SpecificInput({value,dropDownValue}) {

    return (
        <div>
            {<h1>{dropDownValue.toUpperCase()}</h1>}
            {value==='specificHeight'&&<SpecificHeight dropDownValue={dropDownValue}/>}
            {value==='startNFinish'&&<StartNFinish dropDownValue={dropDownValue}/>}
            {value==='specificFrames'&&<SpecificFrame dropDownValue={dropDownValue}/>}
            {value==='framesRange'&&<FrameRange dropDownValue={dropDownValue}/>}
        </div>
    )
}