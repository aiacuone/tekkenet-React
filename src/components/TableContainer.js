import React from 'react'
import characters from '../characters'
import getCharacterMoves from '../getCharacterMoves'
import Table from './Table'

export default function TableContainer({ state, setState }) {
	let character = state.character
	let category = state.category
	let subCategory = state.subCategory
	let attribute1 = state.attribute1
	let attribute2 = state.attribute2

	let noAttribute = [
		'knockdown',
		'counterKnockdown',
		'launch',
		'counterLaunch',
		'rageArt',
		'rageDrive',
		'safe',
		'unSafe',
		'plusOnBlock',
		'powerCrush',
		'wallBounce',
		'homing',
		'single',
		'dual',
		'tripple',
	]

	let oneAttribute = ['specificFrames', 'specificHeight']

	let twoAttributes = ['framesRange', 'startNFinish']

	let moveList = null
	let noAttributeMoveList = null
	let oneAttributeMoveList = null
	let twoAttributesMoveList = null

	if (subCategory !== '' && character !== '') {
		moveList = characters[character].moveList

		if (noAttribute.indexOf(subCategory) >= 0) {
			noAttributeMoveList = getCharacterMoves[category][subCategory].infoFunc(
				moveList
			)
		}

		if (oneAttribute.indexOf(subCategory) >= 0) {
			oneAttributeMoveList = getCharacterMoves[category][subCategory].infoFunc(
				attribute1,
				moveList
			)
		}

		if (twoAttributes.indexOf(subCategory) >= 0) {
			twoAttributesMoveList = getCharacterMoves[category][subCategory].infoFunc(
				attribute1,
				attribute2,
				moveList
			)
		}
	}

	return (
		<div class="tableContainer">
			{noAttributeMoveList !== null && (
				<Table
					state={state}
					setState={setState}
					filteredList={noAttributeMoveList}
				/>
			)}
			{oneAttributeMoveList !== null && (
				<Table
					state={state}
					setState={setState}
					filteredList={oneAttributeMoveList}
				/>
			)}
			{twoAttributesMoveList !== null && (
				<Table
					state={state}
					setState={setState}
					filteredList={twoAttributesMoveList}
				/>
			)}
		</div>
	)
}
