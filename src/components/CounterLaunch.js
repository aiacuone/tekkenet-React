import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'
import Table                from './Table'



export default function CounterLaunch(props) {

    let moveList=       characters[props.dropDownValue].moveList
    let filteredList=   getCharacterMoves.launch.counterLaunch.infoFunc(moveList)
    

    return (

        <div>

            <h2>COUNTER LAUNCH</h2>
            <Table filteredList={filteredList} />

        </div>
        
    )
}
