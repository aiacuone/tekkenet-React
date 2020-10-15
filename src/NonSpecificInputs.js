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
    console.log(value, 'value')
    return (
        
        <div>
            {<h1>{dropDownValue.toUpperCase()}</h1>}
            {value==='launch'&&<Launchers dropDownValue={dropDownValue}/>}
            {value==='counterLaunch'&&<LaunchOnCounter dropDownValue={dropDownValue}/>}
            {value==='knockdown'&&<Knockdown dropDownValue={dropDownValue}/>}
            {value==='counterKnockdown'&&<CounterKnockdown dropDownValue={dropDownValue}/>}
            {value==='rageArt'&&<RageArt dropDownValue={dropDownValue}/>}
            {value==='rageDrive'&&<RageDrive dropDownValue={dropDownValue}/>}
            {value==='safe'&&<Safe dropDownValue={dropDownValue}/>}
            {value==='unSafe'&&<UnSafe dropDownValue={dropDownValue}/>}
            {value==='plusOnBlock'&&<PlusOnBlock dropDownValue={dropDownValue}/>}
            {value==='powerCrush'&&<PowerCrush dropDownValue={dropDownValue}/>}
            {value==='wallBounce'&&<WallBounce dropDownValue={dropDownValue}/>}
            {value==='homing'&&<Homing dropDownValue={dropDownValue}/>}
            {value==='single'&&<Single dropDownValue={dropDownValue}/>}
            {value==='dual'&&<Dual dropDownValue={dropDownValue}/>}
            {value==='tripple'&&<Tripple dropDownValue={dropDownValue}/>}
        </div>
    )
}
