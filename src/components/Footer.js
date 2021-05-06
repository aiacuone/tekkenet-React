import React from 'react'

export default function Footer({ state, setState }) {
	return (
		<div class="footer">
			{state.character !== '' && <h1>{state.character.toUpperCase() + '/'}</h1>}
			{state.category !== '' && <h1>{state.category.toUpperCase() + '/'}</h1>}
			{state.subCategory !== '' && (
				<h1>{state.subCategory.toUpperCase() + '/'}</h1>
			)}
			{state.attribute1 !== '' && <h1>{state.attribute1.toUpperCase()}</h1>}
			{state.attribute2 !== '' && <h1>-{state.attribute2.toUpperCase()}</h1>}
		</div>
	)
}
