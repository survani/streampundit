import React from 'react';

const Roadmap = () => {
	return (
		<>
			<h2 className='text-center mb-6 text-2xl font-bold font-lato lg:text-2xl border-t-4 py-8 '>
				Roadmap
			</h2>

			<div className='mb-10 lg:flex lg:justify-center lg:ml-28'>
				<ol className='relative border-l border-gray-200 dark:border-gray-700'>
					<li className='mb-10 ml-4'>
						<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
						<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							May 2022
						</time>
						<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
							Announcement of StreamPundit
						</h3>
						<p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
							Initial announcement of StreamPundit.
						</p>
						{/* <a
							href='#'
							className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
						>
							Learn more{' '}
							<svg
								className='w-3 h-3 ml-2'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a> */}
					</li>
					<li className='mb-10 ml-4'>
						<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
						<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							June 2023
						</time>
						<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
							Landing Page
						</h3>
						<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
							The main page is where users can view, filter, and search for
							streamers they want to favorite.
						</p>
					</li>
					<li className='mt-10 ml-4'>
						<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
						<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							August 2023
						</time>
						<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
							Streamer Hub + User Dashboard
						</h3>
						<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
							The Streamer Hub will hold all the information of a specific
							streamer. The User Dashboard will allow a user to see all their
							favorite streamer.
						</p>
					</li>
					<li className='ml-4 mt-10'>
						<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
						<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							October 2023
						</time>
						<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
							Ability to Vote
						</h3>
						<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
							Voting will only consist of favoring your favorite streamer.
						</p>
					</li>
					<li className='mt-10 ml-4'>
						<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
						<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							December 2023
						</time>
						<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
							Showcase Top Favorite Streamers
						</h3>
						<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
							The homepage will always showcase random streamers, but we have a
							special place for the Top Favorite Streamers.
						</p>
					</li>
					<li className='mt-10 ml-4'>
						<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
						<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							TBD
						</time>
						<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
							More To Be Announced
						</h3>
						<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
							We will continue to update you all here with what we are up to at
							the moment. We are working hard to create a twitter account to
							keep you all up-to-date with everything related to StreamPundit.
						</p>
					</li>
				</ol>
			</div>
		</>
	);
};

export default Roadmap;
