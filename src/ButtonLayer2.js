import React, {useState,useEffect,useRef} from 'react'
import SpecificInputs from './SpecificInputs'
import characters from './characters'
import getCharacterMoves from './getCharacterMoves'
import Table from './Table'

export default function ButtonLayer2({buttonLayer1Value,dropDownValue}) {

    let [noSpecificButtonValue,setNoSpecificButtonValue]=useState('')
    let [specificButtonValue,setSpecificButtonValue]=useState('')

    function handleClick(e){
        // setNoSpecificButtonValue('')
        // setSpecificButtonValue('')
        e.target.value!=='specificHeight'&&e.target.value!=='startNFinish'&&e.target.value!=='specificFrames'&&e.target.value!=='framesRange'?setNoSpecificButtonValue(e.target.value):setSpecificButtonValue(e.target.value)
    }

    let buttonLayer2=Object.keys(getCharacterMoves[buttonLayer1Value]).map((value)=>{
        return <button value={value} onClick={handleClick}>{value.toUpperCase()}</button>
    })

    let characterMoveList = characters[dropDownValue].moveList
        
    
    
    
    
    //ALL OF THESE NEED TO WORK
    //  console.log(getCharacterMoves,'START ======>getCharacterMoves')
    //  console.log(buttonLayer1Value,'======== buttonLayer1Value')
    //  console.log(noSpecificButtonValue,'======== noSpecificButtonValue')
    //  console.log(characters,'========== characters')
    //  console.log(dropDownValue,'=========== dropDownValue')
    //  console.log(characterMoveList, '<========= characterMoveList FINISH')
     //**** FINISHES HERE */

    // console.log(getCharacterMoves[buttonLayer1Value])



    const isInitialMount = useRef(true);

    useEffect(() => {
      if (isInitialMount.current) {
         isInitialMount.current = false;
      } else {

        setSpecificButtonValue('')
        setNoSpecificButtonValue('')
        console.log('useEffect works')
        console.log(noSpecificButtonValue,'noSpecificButtonValue')
        console.log(specificButtonValue,'specificButtonValue')

      }
    },[buttonLayer1Value]);

     


    // useEffect(() => {


    //     setSpecificButtonValue('')
    //     setNoSpecificButtonValue('')
    //     console.log('useEffect works')
   

      
    // },[buttonLayer1Value]);
    
    console.log(noSpecificButtonValue,'noSpecificButtonValue')
    console.log(specificButtonValue,'specificButtonValue')
        
    
    /*THE FINAL TEST, NEEDS TO BE IN RENDER METHOD*/
    //  noSpecificButtonValue!==''&&getCharacterMoves[buttonLayer1Value][noSpecificButtonValue].infoFunc(characterMoveList)
     

   
    return (
        <div>
            
            {buttonLayer2}




            {/* VARIABLE CHECKS */}
            {console.log('THIS IS THE START OF THE VARIABLES ==>getCharacterMoves',getCharacterMoves)}
            {console.log(buttonLayer1Value,'==>buttonLayer1Value')}
            {console.log(noSpecificButtonValue,'==>noSpecificButtonValue')}
            {console.log(characters,'==>characters')}
            {console.log(dropDownValue,'==>dropDownValue')}
            {console.log(characterMoveList, 'characterMoveList<== THIS IS THE END OF THE VARIBLES')}
            {console.log('getCharacterMoves[buttonLayer1Value][noSpecificButtonValue].infoFunc(characterMoveList)')}
            {console.log(getCharacterMoves[buttonLayer1Value][noSpecificButtonValue],'before infoFunc')}
            



            {/* //THIS SHOULD BE END RESULT */}
            {noSpecificButtonValue!==''&&<Table filteredMoves={getCharacterMoves[buttonLayer1Value][noSpecificButtonValue].infoFunc(characterMoveList)}/>} 



            
            {specificButtonValue!==''&&<SpecificInputs value={specificButtonValue} dropDownValue={dropDownValue}/>}
            
        </div>
    )
}
