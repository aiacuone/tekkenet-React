import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        fontFamily:'Segoe UI',
        padding:'10px'
    }
    
    let arrowDown=<svg 
        width="1em" 
        height="1em" 
        viewBox="0 0 16 16" 
        class="bi bi-caret-down-square" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg">
        <path 
            fill-rule="evenodd" 
            d="M3.544 6.295A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5a.5.5 0 0 1-.082-.537z"
        />
        <path 
            fill-rule="evenodd" 
            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
    </svg>

    return (

        
        filteredList.length>0?(

            <div>
                <br/>
                <table style={tableStyle}>
                    <tr>
        <th style={headerStyle}onClick={()=>handleWordSort("Command")}>COMMAND &nbsp;{arrowDown}</th>
                        <th style={headerStyle}onClick={()=>handleWordSort("Hit level")}>HIT LEVEL &nbsp;{arrowDown}</th>
                        <th style={headerStyle}onClick={()=>handleNumberSort("Damage")}>DAMAGE &nbsp;{arrowDown}</th>
                        <th style={headerStyle}onClick={()=>handleNumberSort("Start up frame")}>START UP FRAME &nbsp;{arrowDown}</th>
                        <th style={headerStyle}onClick={()=>handleNumberSort("Block frame")}>BLOCK FRAME &nbsp;{arrowDown}</th>
                        <th style={headerStyle}onClick={()=>handleWordSort("Hit frame")}>HIT FRAME &nbsp;{arrowDown}</th>
                        <th style={headerStyle}onClick={()=>handleWordSort("Counter hit frame")}>COUNTER HIT FRAME &nbsp;{arrowDown}</th>
                        <th style={headerStyle}onClick={()=>handleWordSort("Notes")}>NOTES &nbsp;{arrowDown}</th>
                    </tr>
                    {moves}
                </table>
            </div>
        ):<h3 style={tableStyle}>NO MOVES</h3>
    )
}

