import React, { useState } from 'react';
// import spotback from '../../images/Spotbackb.png'
import spotback from '../../images/Spotbackw.png';
import { CSSTransition } from 'react-transition-group';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './navbar.css';
import Media from 'react-media';

function Navbar() {
	const [isNavVisible, setNavVisibility] = useState(false);

	const toggleNav = () => {
		setNavVisibility(!isNavVisible);
	};

	return (
		<div className='header' style={{ backgroundColor: '#FFF' }}>
			<div className='bg-color'></div>
			<a href='/'>
				<img src={spotback} className='logo' alt='Spotback logo' />
			</a>
			<>
				<Media
					query='(max-width: 599px)'
					render={() => (
						<>
							<CSSTransition in={isNavVisible} timeout={350} classNames='Animation' unmountOnExit>
								<nav className='head'>
									<a className='links' href='/'>
										HOME
									</a>
									<a className='links' href='/about'>
										ABOUT US
									</a>
									<a className='links' href='/learnMore'>
										{/* WAITLIST */}
										LEARN MORE
									</a>
								</nav>
							</CSSTransition>
							<button onClick={toggleNav} className='Burger'>
								{' '}
								{isNavVisible ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}{' '}
							</button>
						</>
					)}
				/>

				<Media
					query='(min-width: 600px)'
					render={() => (
						<>
							<nav className='head'>
								<a className='links' href='/'>
									HOME
								</a>
								<a className='links' href='/about'>
									ABOUT US
								</a>
								<a className='links' href='/learnMore'>
									{/* WAITLIST */}
									LEARN MORE
								</a>
							</nav>
						</>
					)}
				/>
			</>
		</div>
	);
}

export default Navbar;
