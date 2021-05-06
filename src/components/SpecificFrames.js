import React, { useEffect } from 'react'

export default function SpecificFrames({ state, setState }) {
	function handleChange(e) {
		setState.setAttribute1(e.target.value)
	}

	useEffect(() => {
		setState.setAttribute1('')
	}, [])

	return (
		<div>
			<input
				class="input"
				type="number"
				onChange={handleChange}
				value={state.attribute1}></input>
		</div>
	)
}
