import React, { useEffect } from 'react';
import ProfilePic from '../../assets/profile copy.jpg';
import './Intro.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {
	useEffect(() => {
		Aos.init({ duration: 1000 })
	}, []);

	return (
		<section id="bio-section">
			<h1 id="bio-title">About</h1>
			<section className='bio-pic-info-section'>
				<section id="profile-pic-section">
					<img id="profile-pic" src={ProfilePic} alt="my portrait" data-aos="fade-right" />
				</section>
				<section id="bio-info-section">
					<p className='info-paragraph' data-aos="fade">
						I'm a dedicated developer with experience in the e-commerce and bio-tech world. I enjoy making
						clients and servers play nicely and have a strong eye for detailed UI and clean code. I'm proficient
						in building complex apps with an expertise in JavaScript and associated frameworks as well as various
						testing frameworks.
						</p>
					<br />
					<p className='info-paragraph' data-aos="fade" id='p2'>
						My interests outside of coding include fitness, sports, exploring the great outdoors, reading about new
						advances in artificial intelligence, and enjoying the day at the beach with my dog. I'm an avid
						learner who is always looking to expand my knowledge of anything in the tech and developer world!
						</p>
				</section>
			</section>
		</section>
	);
}
