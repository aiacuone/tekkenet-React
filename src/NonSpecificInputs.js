import React from 'react'
import Launchers from './nonSpecificInputs/Launchers'
import LaunchOnCounter from './nonSpecificInputs/LaunchOnCounter'
import Knockdown from './nonSpecificInputs/Knockdown'
import CounterKnockdown from './nonSpecificInputs/CounterKnockdown'
import RageArt from './nonSpecificInputs/RageArt'
import RageDrive from './nonSpecificInputs/RageDrive'
import Safe from './nonSpecificInputs/Safe'
import UnSafe from './nonSpecificInputs/UnSafe'
import PlusOnBlock from './nonSpecificInputs/PlusOnBlock'
import PowerCrush from './nonSpecificInputs/PowerCrush'
import WallBounce from './nonSpecificInputs/WallBounce'
import Homing from './nonSpecificInputs/Homing'
import Single from './nonSpecificInputs/Single'
import Dual from './nonSpecificInputs/Dual'
import Tripple from './nonSpecificInputs/Tripple'

export default function Table({value,dropDownValue}) {
    return (
        <div>
            {value==='Launchers'&&<Launchers dropDownValue={dropDownValue}/>}
            {value==='Launch On Counter'&&<LaunchOnCounter dropDownValue={dropDownValue}/>}
            {value==='Knockdown'&&<Knockdown dropDownValue={dropDownValue}/>}
            {value==='Counter Knockdown'&&<CounterKnockdown dropDownValue={dropDownValue}/>}
            {value==='Rage Art'&&<RageArt dropDownValue={dropDownValue}/>}
            {value==='Rage Drive'&&<RageDrive dropDownValue={dropDownValue}/>}
            {value==='Safe'&&<Safe dropDownValue={dropDownValue}/>}
            {value==='Unsafe'&&<UnSafe dropDownValue={dropDownValue}/>}
            {value==='+OnBlock'&&<PlusOnBlock dropDownValue={dropDownValue}/>}
            {value==='PowerCrush'&&<PowerCrush dropDownValue={dropDownValue}/>}
            {value==='Wall Bounce'&&<WallBounce dropDownValue={dropDownValue}/>}
            {value==='Homing'&&<Homing dropDownValue={dropDownValue}/>}
            {value==='Single'&&<Single dropDownValue={dropDownValue}/>}
            {value==='Dual'&&<Dual dropDownValue={dropDownValue}/>}
            {value==='Tripple'&&<Tripple dropDownValue={dropDownValue}/>}
        </div>
    )
}
