import React, {useState} from 'react'
import ButtonLayer1 from './ButtonLayer1'
import characters from './characters'

export default function CharacterDropdown() {
    console.log(characters)
    let characterArr= 
    [
        '','Akuma','Alisa','Anna','ArmorKing','Asuka','Bob','Bryan','Claudio','DevilJin','Dragunov','Eddy','Eliza','Fahkumram','Feng','Ganryu','Geese','Gigas','Heihachi','Hwoarang','Jack','Jin','Josie','Julia','Katarina','Kazumi','Kazuya','King','Kuma','Lars','Law','Lee','Lei','Leo','Leroy','Lili','LuckyChloe','Marduk','MasterRaven','Miguel','Negan','Nina','Noctis','Paul','Shaheen','Steve','Xiaoyu','Yoshimitsu','Zafina'
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
