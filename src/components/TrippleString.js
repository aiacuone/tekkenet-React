import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from './Table'



export default function TrippleString(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.strings.tripple.infoFunc(moveList)

    
    return (

        <div>

            <h2>TRIPPLE STRING</h2>
            <Table filteredList={filteredList} />

        </div>
    )
}
