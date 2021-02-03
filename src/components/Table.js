import React, {useState} from 'react'
import Footer from './Footer'
import arrow from '../images/arrow.svg'

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
            return <td class='tableColumn'>{value}</td>
        })
        return <tr class='tableMoveRow'>{newMove}</tr>
    })

    let headerStyle={
        cursor:'pointer'
    }
    

    return (

        filteredList.length>0?(

            <div class='tableContainer2'>
                <Footer selectionObj={props.selectionObj}/>
                <table class='table'>
                    <tr class='tableHeaderRow'>
                        <th class='tableHeader'onClick={()=>handleWordSort("Command")}><div class='tableHeaderContainer'><h1>COMMAND</h1><img class='arrow' src={arrow}/></div></th>
                        <th class='tableHeader'onClick={()=>handleWordSort("Hit level")}><div class='tableHeaderContainer'><h1>HEIGHT</h1> <img class='arrow' src={arrow}/></div></th>
                        <th class='tableHeader'onClick={()=>handleNumberSort("Damage")}><div class='tableHeaderContainer'><h1>DAMAGE</h1> <img class='arrow' src={arrow}/></div></th>
                        <th class='tableHeader'onClick={()=>handleNumberSort("Start up frame")}><div class='tableHeaderContainer'><h3>START FRAME</h3> <img class='arrow' src={arrow}/></div></th>
                        <th class='tableHeader'onClick={()=>handleNumberSort("Block frame")}><div class='tableHeaderContainer'><h1>BLOCK FRAME</h1> <img class='arrow' src={arrow}/></div></th>
                        <th class='tableHeader'onClick={()=>handleWordSort("Hit frame")}><div class='tableHeaderContainer'><h1>HIT FRAME</h1> <img class='arrow' src={arrow}/></div></th>
                        <th class='tableHeader'onClick={()=>handleWordSort("Counter hit frame")}><div class='tableHeaderContainer'><h1>COUNTER</h1> <img class='arrow' src={arrow}/></div></th>
                        <th class='tableHeader'onClick={()=>handleWordSort("Notes")}><div class='tableHeaderContainer'><h1>NOTES</h1> <img class='arrow' src={arrow}/></div></th>
                    </tr>
                    {moves}
                </table>
                <Footer selectionObj={props.selectionObj}/>
            </div>
        ):<h3>NO MOVES</h3>
    )
}

