import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function RageDrive() {
    return (
        <div>
            <h2>RAGE DRIVE</h2>
            {getCharacterMoves.rage.rageDrive.infoFunc()}
        </div>
    )
}
