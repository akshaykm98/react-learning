import React from 'react';
import './Redux.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/counterSlice.js'
import ulquiora from '../images/259823.jpg';

function About() {
	const count = useSelector((state) => state.counter.counterValue)
	const dispatch = useDispatch()

	return (
		<React.Fragment>
			
			<div className="bg">
			<div className='Counter'>
			     <span className='spantitle'> The count is: {count}</span>
				 <br/>
                 <button className='incdecBtn' onClick={() => dispatch(increment())}>Plus</button>
                 <button className='incdecBtn'  onClick={() => dispatch(decrement())}>Minus</button>
			</div>
			</div>
				<div className="bg2">
				<div className='divtoday'>
				<span className='spantitle'>Top picks for you today</span>
				<p>Listen to your favourite songs on the go</p>
			</div>
			</div>
			
		</React.Fragment>
	);
}

export default About;