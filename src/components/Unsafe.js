import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function Unsafe() {
    return (
        <div>
            <h2>UNSAFE</h2>
            {getCharacterMoves.safety.unSafe.infoFunc()}
        </div>
    )
}
