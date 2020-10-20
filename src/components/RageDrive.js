import React from 'react'
import getCharacterMoves from '../getCharacterMoves'
import characters from '../characters'
import Table from '../Table'



export default function RageDrive(props) {

    let moveList=characters[props.dropDownValue].moveList
    let filteredList= getCharacterMoves.rage.rageDrive.infoFunc(moveList)

    return (
        <div>
            <h2>RAGE DRIVE</h2>
            <Table filteredList={filteredList} />
        </div>
    )
}
