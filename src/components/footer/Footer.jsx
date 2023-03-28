import React from 'react';
import './footer.css';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';

function Footer() {
	const date = new Date();
	return (
		<div className='footer'>
			<a href='https://www.facebook.com/spotbackapp/' target='blank'>
				<img className='icons-footer' src={facebook} alt='Facebook logo' />
			</a>
			<a href='https://www.instagram.com/spotbackapp/' target='blank'>
				<img className='icons-footer' src={instagram} alt='Instagram logo' />
			</a>
			<a href='https://twitter.com/Spotback2' target='blank'>
				<img className='icons-footer' src={twitter} alt='Twitter logo' />
			</a>
			<p>{`Copyright © Spotback ${date.getFullYear()}`}</p>
		</div>
	);
}

export default Footer;
