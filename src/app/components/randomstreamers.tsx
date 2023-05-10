import React from 'react';
import StreamerCard from './streamercard';

//FIXME: Need to add the forms in a different component later...
//TODO: Need to add this logic with react-hook-forms better option...

const RandomStreamers = () => {
	return (
		<>
			<div className='flex justify-end'>
				<form action='/send-data-here' method='post'>
					<label htmlFor='search'>Search</label>
					<input
						type='text'
						id='search'
						name='search'
						required
						minLength={10}
						maxLength={20}
						className='text-black'
					/>
					<button type='submit'>Submit</button>
				</form>

				<form action='/send-data-here' method='post' className='ml-6'>
					<label htmlFor='search'>Platforms</label>
					<input
						type='text'
						id='search'
						name='search'
						required
						minLength={10}
						maxLength={20}
						className='text-black'
					/>
				</form>
			</div>
			<div>
				<StreamerCard />
			</div>
		</>
	);
};

export default RandomStreamers;
