import React from 'react'

export default function Table(props) {
    let filteredList=props.filteredList
    return (
        <div>
            <h2>TABLE</h2>
            {filteredList&&console.log(props.filteredList)}
        </div>
    )
}
