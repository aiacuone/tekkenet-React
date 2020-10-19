import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function CounterLaunch() {
    return (
        <div>
            <h2>COUNTER LAUNCH</h2>
            {getCharacterMoves.launch.counterLaunch.infoFunc()}
        </div>
    )
}
