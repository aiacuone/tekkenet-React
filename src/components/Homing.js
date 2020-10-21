import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from './Table'



export default function Homing(props) {

    let moveList=           characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.situational.homing.infoFunc(moveList)

    
    return (

        <div>
            
            <br/>
            
            <h2>HOMING</h2>
            <Table filteredList={filteredList} />

        </div>

    )
}
