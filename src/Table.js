import React, {useState} from 'react'

export default function Table(props) {

    let filteredList=props.filteredList
    
    function buildTable(){

        let headers= Object.keys(filteredList[0]).map((header)=>{
            return <th>{header}</th>
        })
        let tableHeaders=<tr>{headers}</tr>

        let moves=filteredList.map((move)=>{
            let newMove=Object.values(move).map((value)=>{
            return <td>{value}</td>
            })
        return <tr>{newMove}</tr>
        })
        
        return [tableHeaders,moves]

    }

    return (

        <div>
            
            {filteredList.length>0?buildTable():<h1>NO MOVES</h1>}
            
        </div>

    )
}
