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



export default function DropdownTabs() {
    return (
        <div id='dropdownTabsContainer'>
            <div id='dropdownFrames' className='dropdownContainer'>
                <FramesTabs />
            </div>
            <div id='dropdownHeight' className='dropdownContainer'>
                <HeightTabs />
            </div>
            <div id='dropdownKnockdown' className='dropdownContainer'>
                <KnockdownTabs />
            </div>
            <div id='dropdownLaunch' className='dropdownContainer'>
                <LaunchTabs />
            </div>
            <div id='dropdownRage' className='dropdownContainer'>
                <RageTabs />
            </div>
            <div id='dropdownSafety' className='dropdownContainer'>
                <SafetyTabs />
            </div>
            <div id='dropdownSituational' className='dropdownContainer'>
                <SituationalTabs />
            </div>
            <div id='dropdownStrings' className='dropdownContainer'>
                <StringsTabs />
            </div>

        </div>
    )
}
