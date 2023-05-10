import react from 'react';
import Header from './header';
import RandomStreamers from './randomstreamers';

const LandingPage = () => {
	return (
		<>
			<Header />
			<main className='p-2'>
				<RandomStreamers />
			</main>
		</>
	);
};

export default LandingPage;
