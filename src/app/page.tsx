import Image from 'next/image';
import Header from './components/header';
import Roadmap from './components/roadmap';

export default function Home() {
	return (
		<div className='p-6'>
			<Header />
			<main className='flex flex-col mt-8'>
				<Roadmap />
			</main>
		</div>
	);
}
