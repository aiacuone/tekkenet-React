import React, {useState} from 'react'
import ButtonLayer1 from './ButtonLayer1'

export default function CharacterDropdown() {
    let characterArr= 
    [
        '','Akuma','Alisa','Anna','Armor King','Asuka','Bob','Bryan','Claudio','Devil Jin','Dragunov','Eddy','Eliza','Fahkumram','Feng','Ganryu','Geese','Gigas','Heihachi','Hwoarang','Jack','Jin','Josie','Julia','Katarina','Kazumi','Kazuya','King','Kuma','Lars','Law','Lee','Lei','Leo','Leroy','Lili','Lucky Chloe','Marduk','Master Raven','Miguel','Negan','Nina','Noctis','Paul','Shaheen','Steve','Xiaoyu','Yoshimitsu','Zafina'
    ]

    let characterOptions = characterArr.map((character)=>{
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
