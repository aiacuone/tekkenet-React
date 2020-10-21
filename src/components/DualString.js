import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from './Table'



export default function DualString(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.strings.dual.infoFunc(moveList)
    

    return (

        <div>

           <h2>DUAL STRING</h2>
           <Table filteredList={filteredList} />

        </div>
        
    )
}
