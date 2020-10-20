import React from 'react'






export default function SpecificFramesTable(props) {

    let filteredMoveList=props.filteredMoveList


    return (

        <div>

            {filteredMoveList.length>0&&console.log(filteredMoveList,'<=====SpecificFrames filteredMoves')}

        </div>
        
    )
}
