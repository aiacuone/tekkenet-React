import React, { useEffect } from 'react'

export default function StartNFinish({ state, setState }) {
	// eslint-disable-next-line

	function handleChange(e) {
		e.target.name === 'StartNFinish1'
			? setState.setAttribute1(e.target.value)
			: setState.setAttribute2(e.target.value)
	}

	useEffect(() => {
		setState.setAttribute1('')
		setState.setAttribute2('')
	}, [])

	return (
		<div class="startNFinish">
			<div class="startNFinishContainer1">
				<h4>FIRST HEIGHT</h4>
				<label class="attributeLabel radio">
					LOW{' '}
					<input
						class="attributeRadio"
						type="radio"
						name="StartNFinish1"
						value="l"
						onClick={handleChange}></input>
				</label>
				<label class="attributeLabel radio">
					MED{' '}
					<input
						class="attributeRadio"
						type="radio"
						name="StartNFinish1"
						value="m"
						onClick={handleChange}></input>
				</label>
				<label class="attributeLabel radio">
					HIGH{' '}
					<input
						class="attributeRadio"
						type="radio"
						name="StartNFinish1"
						value="h"
						onClick={handleChange}></input>
				</label>
			</div>
			<div class="startNFinishContainer2">
				<h4>SECOND HEIGHT</h4>
				<label class="attributeLabel radio">
					LOW{' '}
					<input
						class="attributeRadio"
						type="radio"
						name="StartNFinish2"
						value="l"
						onClick={handleChange}></input>
				</label>
				<label class="attributeLabel radio">
					MED{' '}
					<input
						class="attributeRadio"
						type="radio"
						name="StartNFinish2"
						value="m"
						onClick={handleChange}></input>
				</label>
				<label class="attributeLabel radio">
					HIGH{' '}
					<input
						class="attributeRadio"
						type="radio"
						name="StartNFinish2"
						value="h"
						onClick={handleChange}></input>
				</label>
			</div>
		</div>
	)
}
