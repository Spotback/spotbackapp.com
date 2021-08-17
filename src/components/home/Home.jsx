import React from 'react';
import './home.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import LogoImg from '../logoImg/LogoImg';
import phone from '../../images/iphoneX.png';
import c1 from '../../images/c1.png';
import c2 from '../../images/c2.png';
import c3 from '../../images/c3.png';
import c4 from '../../images/c4.png';
import c5 from '../../images/c5.png';
import c6 from '../../images/c6.png';
import Button from '../button/Button';
import Slider from 'react-slick';

function Home(props) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnHover: true,
		lazyLoad: true,
		arrows: false,
	};

	const images = [c1, c2, c3, c4, c5, c6];

	return (
		<div id='home'>
			<LogoImg />
			<p className='text-home'>A PEER TO PEER PARKING APPLICATION</p>
			{/* <Button href='waitlist' text='JOIN WAITLIST' /> */}
			<div className='phoneContainer'>
				<img className='phone' src={phone} alt='iphone X' />
				<Slider {...settings}>
					{images.map((image, i) => (
						<img className='screens' src={image} key={i} alt='spotback matching screens' />
					))}
				</Slider>
			</div>

			<div className='info-home'>
				<p style={{ fontSize: '20px', fontWeight: '900' }}>FIND A GREAT PARKING SPOT</p>
				<span>FROM PEOPLE IN YOUR COMMUNITY</span>
				<p style={{ fontSize: '18px', fontWeight: '100', marginBottom: '30px' }}>
					Anyone can find a spot for everyone, no matter where you are, or where you’re going, Spotback will
					lead the way in stress free parking. You will no longer have to circle around and fight for a spot
					when navigating a busy city. With the simple touch of a button, we will match you with someone
					already parked in an awesome spot and willing to hold it, til you arrive, ensuring you get a spot
					close to your desired destination.
				</p>
				<Button href='/learnMore' text='LEARN MORE!' />
			</div>
		</div>
	);
}

export default Home;
