import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function SingleString() {
    return (
        <div>
            <h2>SINGLE STRING</h2>
            {getCharacterMoves.strings.single.infoFunc()}
        </div>
    )
}
