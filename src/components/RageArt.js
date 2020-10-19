import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function RageArt() {
    return (
        <div>
            <h2>RAGE ART</h2>
            {getCharacterMoves.rage.rageArt.infoFunc()}
        </div>
    )
}
