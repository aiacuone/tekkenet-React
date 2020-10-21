import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from './Table'



export default function NormalKnockdown(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.knockdown.knockdown.infoFunc(moveList)


    return (

        <div>
            
            <br/>
            
            <h2>NORMAL KNOCKDOWN</h2>
            <Table filteredList={filteredList} />

        </div>
        
    )
}
