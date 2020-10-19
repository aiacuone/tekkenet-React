import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function DualString() {
    return (
        <div>
           <h2>DUAL STRING</h2>
            {getCharacterMoves.strings.dual.infoFunc()}
        </div>
    )
}
