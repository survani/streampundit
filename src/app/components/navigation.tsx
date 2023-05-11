import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Navigation = () => {
	return (
		<>
			<nav className='p-2 font-lato flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sticky top-0 z-50'>
				<Link href='/'>
					<Image
						src={'/images/StreamPunditLogoMain2.png'}
						width={200}
						height={50}
						alt='Stream Pundit Logo'
						className='w-[250px] '
					/>
				</Link>
				<ul className='flex'>
					<Link href='/roadmap'>
						<li className='mx-4'>Roadmap</li>
					</Link>
					<p>✅ We are still working on StreamPundit</p>
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
