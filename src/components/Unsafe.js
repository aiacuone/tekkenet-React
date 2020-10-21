import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from './Table'



export default function Unsafe(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.safety.unSafe.infoFunc(moveList)

    
    return (

        <div>
            
            <br/>
            
            <h2>UNSAFE</h2>
            <Table filteredList={filteredList} />

        </div>

    )
}
