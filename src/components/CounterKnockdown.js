import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function CounterKnockdown() {
    return (
        <div>
            <h2>COUNTER KNOCKDOWN</h2>
            {getCharacterMoves.knockdown.counterKnockdown.infoFunc()}
        </div>
    )
}
