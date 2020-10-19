import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function Homing() {
    return (
        <div>
            <h2>HOMING</h2>
            {getCharacterMoves.situational.homing.infoFunc()}
        </div>
    )
}
