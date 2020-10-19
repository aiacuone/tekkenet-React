import React from 'react'
import getCharacterMoves from '../getCharacterMoves'

export default function WallBounce() {
    return (
        <div>
            <h2>WALL BOUNCE</h2>
            {getCharacterMoves.situational.wallBounce.infoFunc()}
        </div>
    )
}
