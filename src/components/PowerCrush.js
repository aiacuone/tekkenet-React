import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from '../Table'



export default function PowerCrush(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.situational.powerCrush.infoFunc(moveList)


    return (

        <div>

            <h2>POWER CRUSH</h2>
            <Table filteredList={filteredList} />

        </div>
        
    )
}
