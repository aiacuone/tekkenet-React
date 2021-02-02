import React from 'react'
import characters from '../characters'


export default function CharacterDropdown(props) {

    let characterOptions = Object.keys(characters).map((character)=>{
        return <option value={character}>{character.toUpperCase()}</option>
    })
  
    function handleChange(e){
        props.changeSelectionObj.setCharacter(e.target.value)
    }

    return (
        <div class='dropdown'>
            <label class='characterLabel'>CHARACTER 
                <select class='characterDropdown' onChange={handleChange} value={props.selectionObj.character}>
                    {characterOptions}
                </select>
            </label>

        </div>
    )
}
