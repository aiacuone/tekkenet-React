import React, { useState } from 'react'
import Header from './components/Header'
import CharacterDropdown from './components/CharacterDropdown'
import Category from './components/Category'
import SubCategory from './components/SubCategory'
import Attributes from './components/Attributes'
import TableContainer from './components/TableContainer'
import './styles/index.css'

function App() {
	let [character, setCharacter] = useState('akuma')
	let [category, setCategory] = useState('')
	let [subCategory, setSubCategory] = useState('')
	let [attribute1, setAttribute1] = useState('')
	let [attribute2, setAttribute2] = useState('')

	let state = { character, category, subCategory, attribute1, attribute2 }

	let setState = {
		setCharacter,
		setCategory,
		setSubCategory,
		setAttribute1,
		setAttribute2,
	}

	return (
		<div class="main">
			<Header />
			<CharacterDropdown state={state} setState={setState} />
			<Category state={state} setState={setState} />
			<SubCategory state={state} setState={setState} />
			<Attributes state={state} setState={setState} />
			<TableContainer state={state} setState={setState} />
		</div>
	)
}

export default App
