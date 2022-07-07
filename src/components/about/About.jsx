import React from 'react';
import './about.css';
import LogoImg from '../logoImg/LogoImg';
import TeamImg from '../teamImg/TeamImg';
import joey from '../../images/joey.png';
import camila from '../../images/camila.png';
import shamaun from '../../images/shamaun.png';
import david from '../../images/david.png';

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
					role='Product Management/Mobile Developer'
				/>
				<TeamImg
					src={camila}
					alt='Camila profile picture'
					name='Camila Rodgriguez'
					role='Mobile and Web Developer'
				/>
				<TeamImg src={shamaun} alt='Shamaun profile picture' name='Shamaun Anees' role='Operations' />
				<TeamImg src={david} alt='David profile picture' name='David Bryant' role='Backend Developer' />
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
