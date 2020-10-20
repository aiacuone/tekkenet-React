import React, {useState} from 'react'
import ButtonLayer1 from './ButtonLayer1'
import characters from './characters'

export default function CharacterDropdown() {

    let characterOptions = Object.keys(characters).map((character)=>{
        return <option value={character}>{character.toUpperCase()}</option>
    })

    let [dropDownValue, setDropDownValue] = useState('')    
    function handleChange(e){
        setDropDownValue(e.target.value)
    }

    return (
        <div>
            <label>CHOOSE YOUR CHARACTER
                <select onChange={handleChange}>
                    {characterOptions}
                </select>
            </label>

            {dropDownValue!==''&&<ButtonLayer1 dropDownValue={dropDownValue}/>}
        </div>
    )
}
