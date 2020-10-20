import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from '../Table'



export default function PlusOnBlock(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.situational.plusOnBlock.infoFunc(moveList)

    return (
        <div>
            <h2>+ON BLOCK</h2>
            <Table filteredList={filteredList} />
        </div>
    )
}
