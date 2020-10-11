import React, { PureComponent } from 'react'
import CharacterDropdown from './CharacterDropdown'

export default class characters extends PureComponent {
    
    
    render() {
        let charObj = 'test in Characters'
        return (
            <div>
                <CharacterDropdown characters={charObj}/>
            </div>
        )
    }
}

