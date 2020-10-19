import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function NormalLaunch() {
    return (
        <div>
            <h2>NORMAL LAUNCH</h2>
            {getCharacterMoves.launch.launch.infoFunc()}
        </div>
    )
}
