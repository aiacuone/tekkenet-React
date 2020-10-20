import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from '../Table'



export default function WallBounce(props) {

    let moveList=characters[props.dropDownValue].moveList
    let filteredList= getCharacterMoves.situational.wallBounce.infoFunc(moveList)

    return (
        <div>

            <h2>WALL BOUNCE</h2>
            <Table filteredList={filteredList} />

        </div>
    )
}
