import React from 'react'
import FramesRange from './FramesRange'
import SpecificFrames from './SpecificFrames'
import SpecificHeight from './SpecificHeight'
import StartNFinish from './StartNFinish'

export default function Attributes({ state, setState }) {
	return (
		<div class="attributes">
			{state.subCategory === 'framesRange' && state.category === 'frames' && (
				<FramesRange state={state} setState={setState} />
			)}
			{state.subCategory === 'specificFrames' &&
				state.category === 'frames' && (
					<SpecificFrames state={state} setState={setState} />
				)}
			{state.subCategory === 'specificHeight' &&
				state.category === 'height' && (
					<SpecificHeight state={state} setState={setState} />
				)}
			{state.subCategory === 'startNFinish' && state.category === 'height' && (
				<StartNFinish state={state} setState={setState} />
			)}
		</div>
	)
}
