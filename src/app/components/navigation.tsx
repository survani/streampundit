import React from 'react';
const Navigation = () => {
	return (
		<nav className='p-2 font-lato flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
			<p className='font-extrabold text-xl ml-2'>StreamPundit</p>
			<ul className='flex'>
				{/* <li className='mx-4'>Roadmap</li>
				<li>Contact</li> */}
			</ul>
		</nav>
	);
};

export default Navigation;
