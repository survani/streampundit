import Image from 'next/image';
import Header from './components/header';
import LandingPage from './components/landingpage';
import Roadmap from './components/roadmap';

export default function Home() {
	return (
		<div className='p-6'>
			<LandingPage />
			{/* Uncomment this until the application is fully built */}
			{/* <Header />
			<main className='flex flex-col mt-8'>
				<Roadmap />
			</main> */}
		</div>
	);
}
