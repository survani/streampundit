import Image from 'next/image';
import React from 'react';

Image;

const Footer = () => {
	return (
		<div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center'>
			<Image
				src={'/images/StreamPunditLogoMain2.png'}
				width={250}
				height={100}
				alt='Stream Pundit Logo'
			/>
			<p className='my-2'>✅ We are still working on StreamPundit</p>
		</div>
	);
};

export default Footer;
