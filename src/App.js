import React from 'react';
import { Router } from '@reach/router';
import background from '../src/images/bg.png';
import Home from './components/home/Home';
import About from './components/about/About';
import Waitlist from './components/waitlist/Waitlist';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
	const bg = {
		background: `linear-gradient(rgb(255, 255, 255), rgba(140, 204, 164, 0.5)), url(${background})`,
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		boxSizing: 'border-box',
		width: '100%',
		minHeight: '90vh',
	};

	return (
		<div>
			<Navbar />
			<Router style={bg}>
				<Home path='/' />
				<About path='/about' />
				<Waitlist path='/learnMore' />
			</Router>
			<Footer />
		</div>
	);
}

export default App;
