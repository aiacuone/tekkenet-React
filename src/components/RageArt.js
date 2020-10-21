import React from 'react'
import getCharacterMoves from '../getCharacterMoves'
import characters from '../characters'
import Table from './Table'



export default function RageArt(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.rage.rageArt.infoFunc(moveList)

    
    return (

        <div>

            <h2>RAGE ART</h2>
            <Table filteredList={filteredList} />

        </div>

    )
}
