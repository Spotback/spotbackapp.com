import React from 'react';
// import axios from 'axios';
// import { navigate } from '@reach/router';
import './waitlist.css';
import LogoImg from '../logoImg/LogoImg';

function Waitlist() {
	// const [emailState, setEmailState] = useState({
	// 	email: '',
	// });

	// const onChangeHandler = (e) => {
	// 	setEmailState({ ...emailState, [e.target.name]: e.target.value });
	// };

	// const onSubmitHandler = (e) => {
	// 	e.preventDefault();
	// };

	return (
		<div id='waitlist'>
			<LogoImg />
			<p className='text-waitlist'>
				{' '}
				<span>FIND A GREAT PARKING SPOT FROM PEOPLE LEAVING,</span>{' '}
				<span>WHEN YOU NEED IT, AND WHERE YOU WANT IT</span>
			</p>
			{/* <form onSubmit={onSubmitHandler}>
				<input
					type='email'
					name='email'
					value={emailState.email}
					onChange={onChangeHandler}
					placeholder='Enter your email address'
				/>
				<button className='btn-waitlist' type='submit'>
					JOIN WAITLIST
				</button>
			</form> */}
			<p className='video-txt'>Watch the video</p>
			<iframe
				title='waitlist'
				src='https://www.youtube.com/embed/h26EbkpzI5k'
				frameborder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			></iframe>
		</div>
	);
}

export default Waitlist;
