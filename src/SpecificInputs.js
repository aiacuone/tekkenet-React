
import React from 'react'
import SpecificHeight from './specificInputs/SpecificHeight'
import StartNFinish from './specificInputs/StartNFinish'
import SpecificFrame from './specificInputs/SpecificFrame'
import FrameRange from './specificInputs/FrameRange'




export default function SpecificInput({value}) {
    console.log(value)
    return (
        <div>
            {value==='Specific Height'&&<SpecificHeight />}
            {value==='Start & Finish Height'&&<StartNFinish />}
            {value==='Specific Frame'&&<SpecificFrame />}
            {value==='Frame Range'&&<FrameRange />}


        </div>
    )
}