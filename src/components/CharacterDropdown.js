import React from 'react'
import characters from '../characters'

export default function CharacterDropdown({ state, setState }) {
	let characterOptions = Object.keys(characters).map((character) => {
		return <option value={character}>{character.toUpperCase()}</option>
	})

	function handleChange(e) {
		setState.setCharacter(e.target.value)
	}

	return (
		<div class="dropdown">
			<label class="characterLabel">
				CHARACTER
				<select
					class="characterDropdown"
					onChange={handleChange}
					value={state.character}>
					{characterOptions}
				</select>
			</label>
		</div>
	)
}
