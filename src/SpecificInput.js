import React from 'react'
import SpecificHeight from './SpecificHeight'
import StartNFinish from './StartNFinish'
import SpecificFrame from './SpecificFrame'
import FrameRange from './FrameRange'


export default function SpecificInput({value}) {
    return (
        <div>
            {value==='Specific Height'&&<SpecificHeight />}
            {value==='Start & Finish Height'&&<StartNFinish />}
            {value==='Specific Frame'&&<SpecificFrame />}
            {value==='Frame Range'&&<FrameRange />}
        </div>
    )
}
