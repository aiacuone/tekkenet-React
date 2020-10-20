import React from 'react'






export default function StartNFinishTable(props) {

    let filteredMoveList=props.filteredMoveList
    
    function buildTable(){

        let headers= Object.keys(filteredMoveList[0]).map((header)=>{
            return <th>{header}</th>
        })
        let tableHeaders=<tr>{headers}</tr>

        let moves=filteredMoveList.map((move)=>{
            let newMove=Object.values(move).map((value)=>{
            return <td>{value}</td>
            })
        return <tr>{newMove}</tr>
        })
        
        return [tableHeaders,moves]

    }

    return (

        <div>
            
            {filteredMoveList.length>0?buildTable():<h1>NO MOVES</h1>}
            
        </div>

    )
}

