import React, { useEffect } from 'react'

export default function FramesRange({ state, setState }) {
	function handleChange(e) {
		e.target.name === 'low'
			? setState.setAttribute1(e.target.value)
			: setState.setAttribute2(e.target.value)
	}

	useEffect(() => {
		setState.setAttribute1('')
		setState.setAttribute2('')
	}, [])

	return (
		<div>
			<label>
				LOW{' '}
				<input
					class="input"
					type="number"
					value={state.attribute1}
					name="low"
					min="9"
					onChange={handleChange}></input>
			</label>
			<label>
				HIGH{' '}
				<input
					class="input"
					type="number"
					value={state.attribute2}
					name="high"
					min="9"
					onChange={handleChange}></input>
			</label>
		</div>
	)
}
