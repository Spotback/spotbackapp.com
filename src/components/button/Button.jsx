import React from 'react';
import './button.css';

function Button(props) {
	return (
		<div>
			<a className='btn' href={props.href}>
				{props.text}
			</a>
		</div>
	);
}

export default Button;
