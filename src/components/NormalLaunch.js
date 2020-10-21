import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from './Table'



export default function NormalLaunch(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.launch.launch.infoFunc(moveList)
    
    return (

        <div>
            
            <br/>
            
            <h2>NORMAL LAUNCH</h2>
            <Table filteredList={filteredList} />

        </div>

    )
}
