import React from 'react';
import './Intro.css';

export default function Intro() {
	return (
		<section id="intro-section">
			<header className="headline" role="banner">
				<h1>Hi, I'm Navin. I'm a fullstack developer from Los Angeles</h1>
			</header>
			<section id="bio-section">
				<p>
					I'm a dedicated developer with experience in the e-commerce and bio-tech world. I enjoy making
					clients and servers play nicely and have a strong eye for detailed UI and clean code. I'm proficient
					in building complex apps with an expertise in JavaScript and associated frameworks as well as various
					testing frameworks.
				</p>
				<br />
				<p>
					My interests outside of coding include fitness, sports, the great outdoors, reading about new
					advances in artificial intelligence, and enjoying the day at the beach with my dog. I'm an avid
					learner who is always looking to expand my knowledge of anything in the tech and developer world!
				</p>
			</section>
		</section>
	);
}
