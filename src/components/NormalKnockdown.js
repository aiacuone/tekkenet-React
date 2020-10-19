import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function NormalKnockdown() {
    return (
        <div>
            <h2>NORMAL KNOCKDOWN</h2>
            {getCharacterMoves.knockdown.knockdown.infoFunc()}
        </div>
    )
}
