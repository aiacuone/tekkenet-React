import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from './Table'



export default function SingleString(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.strings.single.infoFunc(moveList)


    return (

        <div>
            
            <br/>
            
            <h2>SINGLE STRING</h2>
            <Table filteredList={filteredList} />
            
        </div>

    )
}
