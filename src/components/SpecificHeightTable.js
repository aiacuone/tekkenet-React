import React                from 'react'
import getCharacterMoves    from '../getCharacterMoves'
import characters           from '../characters'




export default function SpecificHeightTable(props) {

let height=             props.height
let moveList=           characters[props.dropDownValue].moveList
let filteredMoveList=   getCharacterMoves.height.specificHeight.infoFunc(height,moveList)


    return (

        <div>

            SpecificHeightTable
            {filteredMoveList.length>0&&console.log(filteredMoveList)}
            <h3>{props.height}</h3>
            <h3>{props.dropDownValue}</h3>

        </div>
        
    )
}
