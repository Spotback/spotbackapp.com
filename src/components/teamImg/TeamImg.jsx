import React from 'react';
import './teamImg.css';

function TeamImg(props) {
	return (
		<div className='team-img'>
			<img src={props.src} alt={props.alt} />
			<p>{props.name}</p>
			<p>{props.role}</p>
		</div>
	);
}

export default TeamImg;
