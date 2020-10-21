import React from 'react'
import getCharacterMoves from '../getCharacterMoves'
import characters from '../characters'
import Table from './Table'



export default function Safe(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.safety.safe.infoFunc(moveList)


    return (

        <div>
            
            <br/>
            
            <h2>SAFE</h2>
            <Table filteredList={filteredList} />

        </div>
        
    )
}
