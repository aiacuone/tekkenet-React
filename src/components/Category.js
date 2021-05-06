import React from 'react'
import '../styles/category.css'

export default function Category({ state, setState }) {
	function handleClick(category) {
		setState.setAttribute1('')
		setState.setAttribute2('')
		setState.setSubCategory('')
		setState.setCategory(category)
	}

	let categoryArr = [
		'frames',
		'height',
		'knockdown',
		'launch',
		'rage',
		'safety',
		'situational',
		'strings',
	]

	let categoryButtons = categoryArr.map((item) => {
		return (
			<button
				style={{ background: item == state.category && 'grey' }}
				class="categoryButton"
				onClick={() => handleClick(item)}>
				{item.toUpperCase()}
			</button>
		)
	})

	return <div class="category">{categoryButtons}</div>
}
