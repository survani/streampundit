import Image from 'next/image';
import React from 'react';
const Navigation = () => {
	return (
		<nav className='p-2 font-lato flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sticky top-0 z-50'>
			<Image
				src={'/images/StreamPunditLogoMain2.png'}
				width={200}
				height={50}
				alt='Stream Pundit Logo'
				className='w-[250px] '
			/>
			<ul className='flex'>
				<p className='mr-2'>✅ We are still working on StreamPundit</p>
				{/* <li className='mx-4'>Roadmap</li>
				<li>Contact</li> */}
			</ul>
		</nav>
	);
};

export default Navigation;
