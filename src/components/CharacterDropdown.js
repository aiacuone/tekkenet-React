import React, {useState} from 'react'
import ButtonLayer1 from '../ButtonLayer1'
import characters from '../characters'
import MainContainer from './tabMain/MainContainer'

export default function CharacterDropdown(props) {

    let characterOptions = Object.keys(characters).map((character)=>{
        return <option value={character}>{character.toUpperCase()}</option>
    })
  
    function handleChange(e){
        props.changeSelectionObj.setCharacter(e.target.value)

    }

    return (
        <div class='dropdown'>
            {console.log(props.selectionObj.character)}
            <label class='characterLabel'>CHARACTER 
                <select class='characterDropdown' onChange={handleChange} value={props.selectionObj.character}>
                    {characterOptions}
                </select>
            </label>

            {/* {dropDownValue!==''&&<ButtonLayer1 dropDownValue={dropDownValue}/>} */}
            {/* {dropDownValue!==''&&<TabMainContainer dropDownValue={dropDownValue}/>} */}
            {/* <MainContainer dropDownValue={dropDownValue}/> */}
        </div>
    )
}
