import React from 'react'
import getCharacterMoves from '../getCharacterMoves'
import characters from '../characters'




export default function SpecificHeightTable(props) {

let height=props.height
let moveList=characters[props.dropDownValue].moveList
let filteredMoves=getCharacterMoves.height.specificHeight.infoFunc(height,moveList)
console.log(filteredMoves,'specific height table filtered moves')


    return (
        <div>

            SpecificHeightTable
            <h3>{props.height}</h3>
            <h3>{props.dropDownValue}</h3>
            
        </div>
    )
}
