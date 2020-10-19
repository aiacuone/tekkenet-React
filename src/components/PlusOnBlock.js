import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function PlusOnBlock() {
    return (
        <div>
            <h2>+ON BLOCK</h2>
            {getCharacterMoves.situational.plusOnBlock.infoFunc()}
        </div>
    )
}
