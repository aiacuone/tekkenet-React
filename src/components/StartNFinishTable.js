import React from 'react'






export default function StartNFinishTable(props) {

    let filteredMoveList=props.filteredMoveList

    
    return (

        <div>

            {filteredMoveList.length>0&&console.log(filteredMoveList, 'StartNFinish filteredList')}
            START N FINISH TABLE

        </div>

    )
}
