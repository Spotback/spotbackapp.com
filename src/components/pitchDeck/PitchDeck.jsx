import React from 'react';
import './pitchDeck.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import LogoImg from '../logoImg/LogoImg';
import s1 from '../../images/s1.png';
import s2 from '../../images/s2.png';
import s3 from '../../images/s3.png';
import s4 from '../../images/s4.png';
import s5 from '../../images/s5.png';
import s6 from '../../images/s6.png';
import s7 from '../../images/s7.png';
import s8 from '../../images/s8.png';
import s9 from '../../images/s9.png';
import s10 from '../../images/s10.png';
import s11 from '../../images/s11.png';
import Slider from 'react-slick';

function PitchDeck(props) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 10000,
		pauseOnHover: true,
		lazyLoad: true,
		arrows: true,
	};

	const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11];

	return (
		<div id='home'>
			<LogoImg />
			<p className='text'>Building a parking community for you, wherever you need to be.</p>
			<div className='container'>
				<Slider {...settings}>
					{images.map((image, i) => (
						<img className='pitchscreens' src={image} key={i} alt='spotback matching screens' />
					))}
				</Slider>
			</div>
		</div>
	);
}

export default PitchDeck;
