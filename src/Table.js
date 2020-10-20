import React from 'react'

export default function Table(props) {
    let filteredList=props.filteredList
    return (
        <div>
            <h2>TABLE</h2>
            {filteredList.length>0&&console.log(props.filteredList)}
        </div>
    )
}
