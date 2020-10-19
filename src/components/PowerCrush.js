import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function PowerCrush() {
    return (
        <div>
            <h2>POWER CRUSH</h2>
            {getCharacterMoves.situational.powerCrush.infoFunc()}
        </div>
    )
}
