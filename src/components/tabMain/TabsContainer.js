import React from 'react'
import TopTabs from './TopTabs'
import DropdownTabs from './DropdownTabs'

export default function Tabs() {
    return (
        <div id='tabsContainer'>
            <TopTabs />
            <DropdownTabs />
        </div>
    )
}
