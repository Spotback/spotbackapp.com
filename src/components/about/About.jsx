import React from 'react';
import './about.css';
import LogoImg from '../logoImg/LogoImg';
import TeamImg from '../teamImg/TeamImg';
import joey from '../../images/joey.png';
import dylan from '../../images/dylan.png';
import dmitry from '../../images/dmitry.png';

function About(props) {
	return (
		<div id='about'>
			<LogoImg />
			<p className='text-about'>MEET THE SPOTBACK TEAM</p>
			<div className='img-container-about'>
				<TeamImg
					src={joey}
					alt='Joey profile picture'
					name='Joey Caruana'
					role='Product Manager/Software Developer'
				/>
				<TeamImg src={dylan} alt='Dylan profile picture' name='Dylan Corbus' role='Software Developer' />
				<TeamImg src={dmitry} alt='Dmitry profile picture' name='Dmitry Sokolov' role='iOS Developer' />
			</div>
			<div className='mission'>
				<h1>Our Mission</h1>
				<p>
					At Spotback we think parking should be stress free, easy to find, and highly available. Our goal is
					to create parking spaces near your desired destination to save you time, money and frustration. We
					provide a platform that allows users the ability to communicate with other people looking for a spot
					or leaving their spot.
				</p>
			</div>
		</div>
	);
}

export default About;
