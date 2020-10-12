import React from 'react'

export default function SpecificInputs(props) {
// console.log(props)
    return (
        <div>
            {props.specificInput===''?null:console.log(props.specificInput)}
        </div>
    )
}
