import React from 'react';
import './about.css';
import LogoImg from '../logoImg/LogoImg';
import TeamImg from '../teamImg/TeamImg';
import camila from '../../images/camila2.jpg';
import joey from '../../images/joey2.jpeg';

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
			</div>
			<div className='mission'>
				<h1>Our Mission</h1>
				<p>
					Our mission at Spotback is to provide a stress-free and accessible parking experience that saves our
					users time, money, and frustration. We aim to achieve this by creating parking spaces in close
					proximity to their desired destination. To accomplish our goal, we offer a user-friendly platform
					that facilitates communication between those in search of a parking spot and those vacating one.
				</p>
			</div>
		</div>
	);
}

export default About;
