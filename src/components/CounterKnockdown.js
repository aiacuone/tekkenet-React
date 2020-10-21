import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from './Table'



export default function CounterKnockdown(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.knockdown.counterKnockdown.infoFunc(moveList)
    
    
    return (

        <div>
            
            <br/>
            
            <h2>COUNTER KNOCKDOWN</h2>
            <Table filteredList={filteredList} />

        </div>

    )
}
