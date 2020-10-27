import React from 'react'
import './dropdownTabs.css'
import FramesTabs from './dropdown/FramesTabs'
import HeightTabs from './dropdown/HeightTabs'
import KnockdownTabs from './dropdown/KnockdownTabs'
import LaunchTabs from './dropdown/LaunchTabs'
import RageTabs from './dropdown/RageTabs'
import SafetyTabs from './dropdown/SafetyTabs'
import SituationalTabs from './dropdown/SituationalTabs'
import StringsTabs from './dropdown/StringsTabs'
// import frames from './TopTabs'



export default function DropdownTabs(props) {
    let normalTabStyle={
        cursor: 'pointer',
        listStyle: 'none',
        textAlign: 'center',
        width: '100%',
        padding: '0 8px 0 8px',
        fontSize: '15px',
        border:'1px solid black',
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
        borderBottom:'none',
    }
    // props.frames===normalTabStyle&&console.log('yes')
    // console.log(props.frames)
    return (
        <div id='dropdownTabsContainer'>
            <div id='dropdownFrames' className='dropdownContainer'>
                {props.frames&&<FramesTabs />}
            </div>
            <div id='dropdownHeight' className='dropdownContainer'>
                {props.height&&<HeightTabs />}
            </div>
            <div id='dropdownKnockdown' className='dropdownContainer'>
                {props.knockdown&&<KnockdownTabs />}
            </div>
            <div id='dropdownLaunch' className='dropdownContainer'>
                {props.launch&&<LaunchTabs />}
            </div>
            <div id='dropdownRage' className='dropdownContainer'>
                {props.rage&&<RageTabs />}
            </div>
            <div id='dropdownSafety' className='dropdownContainer'>
                {props.safety&&<SafetyTabs />}
            </div>
            <div id='dropdownSituational' className='dropdownContainer'>
                {props.situational&&<SituationalTabs />}
            </div>
            <div id='dropdownStrings' className='dropdownContainer'>
                {props.strings&&<StringsTabs />}
            </div>

        </div>
    )
}
