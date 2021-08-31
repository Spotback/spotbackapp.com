import React from 'react';
import { Link } from '@reach/router';
import './button.css';

function Button(props) {
	return (
		<div>
			<Link className='btn' to={props.to}>
				{props.text}
			</Link>
		</div>
	);
}

export default Button;
