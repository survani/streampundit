import React from 'react';
import Roadmap from './roadmap';
const Header = () => {
	return (
		<div className='text-center font-lato'>
			<h1 className='text-4xl mt-8 mb-4 font-black lg:text-6xl'>
				A platform to see the most favorite streamers!
			</h1>
			<div className='text-gray-500 lg:text-xl lg:mb-12'>
				<p>Are you tired of looking for your next favorite streamer?</p>
				<p>We created this platform so you can do just that</p>
			</div>
		</div>
	);
};

export default Header;
