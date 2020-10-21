import React, {useState} from 'react'

export default function Table(props) {
    let [sort,setSort]=useState(false)

    let filteredList=props.filteredList




    function handleNumberSort(key){
        setSort(!sort)

        sort?filteredList.sort((a,b)=>{
            return parseFloat(a[key])-parseFloat(b[key])
        })
        :filteredList.sort((a,b)=>{
            return parseFloat(b[key])-parseFloat(a[key])
        })
        
    }

    function handleWordSort(key){
        setSort(!sort)
        sort?filteredList.sort((a,b)=>{
            if ( a[key].toLowerCase() < b[key].toLowerCase()   ){
                return -1;
            }
            if ( a[key].toLowerCase() > b[key].toLowerCase()   ){
                return 1;
            }
            return 0;
        }):filteredList.sort((a,b)=>{
            if ( a[key].toLowerCase() > b[key].toLowerCase()   ){
                return -1;
            }
            if ( a[key].toLowerCase() < b[key].toLowerCase()   ){
                return 1;
            }
            return 0;
        })
    }
    
    let moves=filteredList.map((move)=>{
        let newMove=Object.values(move).map((value)=>{
            value=value.toUpperCase()
            return <td>{value}</td>
        })
        return <tr>{newMove}</tr>
    })

    let headerStyle={
        cursor:'pointer'
    }

    let tableStyle={
        fontFamily:'Segoe UI'
    }
    
    return (
        filteredList.length>0?(
            <div>
                <table style={tableStyle}>
                    <tr>
                        <th style={headerStyle}onClick={()=>handleWordSort("Command")}>COMMAND</th>
                        <th style={headerStyle}onClick={()=>handleWordSort("Hit level")}>HIT LEVEL</th>
                        <th style={headerStyle}onClick={()=>handleNumberSort("Damage")}>DAMAGE</th>
                        <th style={headerStyle}onClick={()=>handleNumberSort("Start up frame")}>START UP FRAME</th>
                        <th style={headerStyle}onClick={()=>handleNumberSort("Block frame")}>BLOCK FRAME</th>
                        <th style={headerStyle}onClick={()=>handleWordSort("Hit frame")}>HIT FRAME</th>
                        <th style={headerStyle}onClick={()=>handleWordSort("Counter hit frame")}>COUNTER HIT FRAME</th>
                        <th style={headerStyle}onClick={()=>handleWordSort("Notes")}>NOTES</th>
                    </tr>
                    {moves}
                </table>
            </div>
        ):<h3 style={tableStyle}>NO MOVES</h3>
    )
}

