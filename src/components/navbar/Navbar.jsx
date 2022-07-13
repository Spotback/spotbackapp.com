import React, { useState } from 'react';
// import spotback from '../../images/Spotbackb.png'
import { Link } from '@reach/router';
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
			<Link to='/'>
				<img src={spotback} className='logo' alt='Spotback logo' />
			</Link>
			<>
				<Media
					query='(max-width: 599px)'
					render={() => (
						<>
							<CSSTransition in={isNavVisible} timeout={350} classNames='Animation' unmountOnExit>
								<nav className='head'>
									<Link className='links' to='/'>
										HOME
									</Link>
									<Link className='links' to='meetTheTeam'>
										MEET THE TEAM
									</Link>
									<Link className='links' to='learnMore'>
										{/* WAITLIST */}
										LEARN MORE
									</Link>
								</nav>
							</CSSTransition>
							<button onClick={toggleNav} className='Burger'>
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
								<Link className='links' to='/'>
									HOME
								</Link>
								<Link className='links' to='meetTheTeam'>
									MEET THE TEAM
								</Link>
								<Link className='links' to='learnMore'>
									{/* WAITLIST */}
									LEARN MORE
								</Link>
							</nav>
						</>
					)}
				/>
			</>
		</div>
	);
}

export default Navbar;
