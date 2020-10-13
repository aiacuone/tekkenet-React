
import React from 'react'
import SpecificHeight from './specificInputs/SpecificHeight'
import StartNFinish from './specificInputs/StartNFinish'
import SpecificFrame from './specificInputs/SpecificFrame'
import FrameRange from './specificInputs/FrameRange'




export default function SpecificInput({value,dropDownValue}) {
    console.log(value)
    return (
        <div>
            {value==='Specific Height'&&<SpecificHeight dropDownValue={dropDownValue}/>}
            {value==='Start & Finish Height'&&<StartNFinish dropDownValue={dropDownValue}/>}
            {value==='Specific Frame'&&<SpecificFrame dropDownValue={dropDownValue}/>}
            {value==='Frame Range'&&<FrameRange dropDownValue={dropDownValue}/>}
        </div>
    )
}