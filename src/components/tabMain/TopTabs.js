import React, {useState} from 'react'
import DropdownTabs from './DropdownTabs'

export function TopTabs() {

    let tabStyle={
        cursor: 'pointer',
        listStyle: 'none',
        textAlign: 'center',
        width: '100%',
        padding: '0 8px 0 8px',
        fontSize: '15px',
    }

    let tabClickedStyle={
        cursor: 'pointer',
        listStyle: 'none',
        textAlign: 'center',
        width: '100%',
        padding: '0 8px 0 8px',
        fontSize: '15px',
        border:'1px solid black',
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
        borderBottom:'none',
    }

    let [frames, setFrames]             =useState(false)
    let [height, setHeight]             =useState(false)
    let [knockdown, setKnockdown]       =useState(false)
    let [launch, setLaunch]             =useState(false)
    let [rage, setRage]                 =useState(false)
    let [safety, setSafety]             =useState(false)
    let [situational, setSituational]   =useState(false)
    let [strings, setStrings]           =useState(false)


    function handleClick(e){
        console.log(e)
        let value= e.target.attributes.value.value
        value==='frames'?setFrames          (true):setFrames        (false)
        value==='height'?setHeight          (true):setHeight        (false)
        value==='knockdown'?setKnockdown    (true):setKnockdown     (false)
        value==='launch'?setLaunch          (true):setLaunch        (false)
        value==='rage'?setRage              (true):setRage          (false)
        value==='safety'?setSafety          (true):setSafety        (false)
        value==='situational'?setSituational(true):setSituational   (false)
        value==='strings'?setStrings        (true):setStrings       (false)  
    }

    function handleMouseOut(e){
        let value= e.target.attributes.value.value
        value==='frames'?setFrames          (false):setFrames       (true)
        value==='height'?setHeight          (false):setHeight       (true)
        value==='knockdown'?setKnockdown    (false):setKnockdown    (true)
        value==='launch'?setLaunch          (false):setLaunch       (true)
        value==='rage'?setRage              (false):setRage         (true)
        value==='safety'?setSafety          (false):setSafety       (true)
        value==='situational'?setSituational(false):setSituational  (true)
        value==='strings'?setStrings        (false):setStrings      (true)  
    }

    let framesStyle=frames?tabClickedStyle:tabStyle
    let heightStyle=height?tabClickedStyle:tabStyle
    let knockdownStyle=knockdown?tabClickedStyle:tabStyle
    let launchStyle=launch?tabClickedStyle:tabStyle
    let rageStyle=rage?tabClickedStyle:tabStyle
    let safetyStyle=safety?tabClickedStyle:tabStyle
    let situationalStyle=situational?tabClickedStyle:tabStyle
    let stringsStyle=strings?tabClickedStyle:tabStyle


    return (
        <div id='topTabsContainer'>
            <ul>
                <div className='topTabsSpacer'></div>
               <li 
                    style={framesStyle}
                    onClick={handleClick}
                    // onMouseOut={handleMouseOut}
                    value='frames'>
                    FRAMES
                    
               </li>

               <li 
                    style={heightStyle}
                    onClick={handleClick} 
                    value='height'>
                    HEIGHT
               </li>

               <li 
                    style={knockdownStyle}
                    onClick={handleClick} 
                    value='knockdown'>
                    KNOCKDOWN
               </li>

               <li 
                    style={launchStyle}
                    onClick={handleClick} 
                    value='launch'>
                    LAUNCH
               </li>

               <li 
                    style={rageStyle}
                    onClick={handleClick} 
                    value='rage'>
                    RAGE
               </li>

               <li 
                    style={safetyStyle}
                    onClick={handleClick} 
                    value='safety'>
                    SAFETY
               </li>

               <li 
                    style={situationalStyle}
                    onClick={handleClick} 
                    value='situational'>
                    SITUATIONAL
               </li>

               <li 
                    style={stringsStyle}
                    onClick={handleClick} 
                    value='strings'>
                    STRINGS
               </li>

               <div className='topTabsSpacer'></div>
           </ul>
           <DropdownTabs frames={frames} height={height} knockdown={knockdown} launch={launch} rage={rage} safety={safety} situational={situational} strings={strings}/>
        </div>
    )
}

export default TopTabs
