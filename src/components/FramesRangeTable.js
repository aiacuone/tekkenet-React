import React from 'react'






export default function FramesRangeTable(props) {

    let filteredMoveList=props.filteredMoveList
    
    return (

        <div>

            {filteredMoveList.length!==0&&console.log(filteredMoveList,'<===FramesRangeTable FilteredList')}
            FRAMES RANGE TABLE

        </div>
        
    )
}


//NOTE: THIS FILTERING FUNCTION IS NOT WORKING WHEN THE MINIMUM VALUE FRAMES ARE BELOW 10