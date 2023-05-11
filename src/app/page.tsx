import Image from 'next/image';
import useStore from '../../store/store';
import Header from './components/header';
import LandingPage from './components/landingpage';
import Roadmap from './components/roadmap';

export default function Home() {
	//TODO: Leave for now will add the right state later.
	const [count, increase, decrease] = useStore((state) => [
		state.count,
		state.increase,
		state.decrease,
	]);

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
