import React, { useEffect } from 'react'

export default function SpecificHeight({ state, setState }) {
	function handleChange(e) {
		setState.setAttribute1(e.target.value)
	}

	useEffect(() => {
		setState.setAttribute1('')
	}, [])

	return (
		<div>
			<label>
				LOW
				<input
					type="radio"
					value="l"
					name="height"
					onChange={handleChange}></input>
			</label>
			<label>
				MED
				<input
					type="radio"
					value="m"
					name="height"
					onChange={handleChange}></input>
			</label>
			<label>
				HIGH
				<input
					type="radio"
					value="h"
					name="height"
					onChange={handleChange}></input>
				<br />
			</label>
		</div>
	)
}
