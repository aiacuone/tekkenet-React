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

export default function Table({value}) {
    return (
        <div>
            {value==='Launchers'&&<Launchers />}
            {value==='Launch On Counter'&&<LaunchOnCounter />}
            {value==='Knockdown'&&<Knockdown />}
            {value==='Counter Knockdown'&&<CounterKnockdown />}
            {value==='Rage Art'&&<RageArt />}
            {value==='Rage Drive'&&<RageDrive />}
            {value==='Safe'&&<Safe />}
            {value==='Unsafe'&&<UnSafe />}
            {value==='+OnBlock'&&<PlusOnBlock />}
            {value==='PowerCrush'&&<PowerCrush />}
            {value==='Wall Bounce'&&<WallBounce />}
            {value==='Homing'&&<Homing />}
            {value==='Single'&&<Single />}
            {value==='Dual'&&<Dual />}
            {value==='Tripple'&&<Tripple />}
        </div>
    )
}
