import React, {useState} from 'react'
import ButtonLayer1 from './ButtonLayer1'
import characters from './characters'
import MainContainer from './components/tabMain/MainContainer'

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
            <br/>
            <label>CHOOSE YOUR CHARACTER
                <select onChange={handleChange}>
                    {characterOptions}
                </select>
            </label>

            {dropDownValue!==''&&<ButtonLayer1 dropDownValue={dropDownValue}/>}
            {/* {dropDownValue!==''&&<TabMainContainer dropDownValue={dropDownValue}/>} */}
            <MainContainer dropDownValue={dropDownValue}/>
        </div>
    )
}
