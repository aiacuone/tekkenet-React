import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function TrippleString() {
    return (
        <div>
            <h2>TRIPPLE STRING</h2>
            {getCharacterMoves.strings.tripple.infoFunc()}
        </div>
    )
}
