import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function Safe() {
    return (
        <div>
            <h2>SAFE</h2>
            {getCharacterMoves.safety.safe.infoFunc()}
        </div>
    )
}
