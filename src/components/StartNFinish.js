import React, {useEffect} from 'react'
import getCharacterMoves from '../getCharacterMoves'
import characters from '../characters'
import Table from './Table'



export default function StartNFinish(props) {// eslint-disable-next-line

    // let moveList=           characters[props.dropDownValue].moveList
    // let filteredMoveList=   getCharacterMoves.height.startNFinish.infoFunc(value1,value2,moveList)

    function handleChange(e){
        e.target.name==='StartNFinish1'?props.changeSelectionObj.setAttribute1(e.target.value):props.changeSelectionObj.setAttribute2(e.target.value)
    }

    useEffect(()=>{
        props.changeSelectionObj.setAttribute1('')
        props.changeSelectionObj.setAttribute2('')
    },[])
    

    return (

        <div class='startNFinish'>
            {console.log(props.selectionObj.attribute1,props.selectionObj.attribute2)}
            <div class='startNFinishContainer1'>
                <h4>FIRST HEIGHT</h4>
                <label class='attributeLabel radio'>LOW  <input class='attributeRadio'type='radio' name='StartNFinish1' value='l' onClick={handleChange}></input></label>
                <label class='attributeLabel radio'>MED  <input class='attributeRadio'type='radio' name='StartNFinish1' value='m' onClick={handleChange}></input></label>
                <label class='attributeLabel radio'>HIGH <input class='attributeRadio'type='radio' name='StartNFinish1' value='h' onClick={handleChange}></input></label>
            </div>
            <div class='startNFinishContainer2'>
                <h4>SECOND HEIGHT</h4>
                <label class='attributeLabel radio'>LOW  <input class='attributeRadio'type='radio' name='StartNFinish2' value='l' onClick={handleChange}></input></label>
                <label class='attributeLabel radio'>MED  <input class='attributeRadio'type='radio' name='StartNFinish2' value='m' onClick={handleChange}></input></label>
                <label class='attributeLabel radio'>HIGH <input class='attributeRadio'type='radio' name='StartNFinish2' value='h' onClick={handleChange}></input></label>
            </div>
            {/* {value1&&value2&&<Table filteredList={filteredMoveList}/>} */}
     
        </div>
        
    )
}
