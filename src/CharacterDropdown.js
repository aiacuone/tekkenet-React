import React, {useEffect,useState} from 'react'
import FirstButtonLayer from './FirstButtonLayer'

function CharacterDropdown(){
    let characterArr= 
    [
        '','Akuma','Alisa','Anna','Armor King','Asuka','Bob','Bryan','Claudio','Devil Jin','Dragunov','Eddy','Eliza','Fahkumram','Feng','Ganryu','Geese','Gigas','Heihachi','Hwoarang','Jack','Jin','Josie','Julia','Katarina','Kazumi','Kazuya','King','Kuma','Lars','Law','Lee','Lei','Leo','Leroy','Lili','LuckyChoe','Marduk','MasterRaven','Miguel','Negan','Nina','Noctis','Paul','Shaheen','Steve','Xiaoyu','Yoshimitsu','Zafina'
    ]

    let charOptions= characterArr.map((char)=>{
        return <option key = {char} value={char}>{char.toUpperCase()}</option>
    })

    /** USE STATE HOOKS**/
    let [character,setCharacter]=useState('')

    function characterChange(e){
        setCharacter(character=e.target.value)
    }
    useEffect(()=>{
    },[character])

    return(
        <div>
            <label htmlFor='characterDropdown'>CHOOSE YOUR CHARACTER</label>
                <select name='characterDropdown' onChange={characterChange} value={character}>
                  {charOptions}
                </select>
                <FirstButtonLayer characterReference={character}/>
        </div>
    )
}
export default CharacterDropdown;