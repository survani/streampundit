'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';

const StreamerCard = () => {
	console.log();
	type Streams = {
		id: number;
		user_id: number;
		user_name: string;
		type: string;
		viewer_count: number;
		thumbnail_url: string;
	};

	async function getStreams() {
		const res = await axios('https://api.twitch.tv/helix/streams?first=50', {
			method: 'get',
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITCH_TOKEN}`,
				'Content-Type': 'application/json',
				'Client-Id': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
			},
		});
		const streams = await res.data;
		return streams.data;
	}

	const {
		data: streams,
		isLoading,
		isFetching,
		error,
	} = useQuery({
		queryKey: ['streams'],
		queryFn: getStreams,
	});

	const random = (min: number, max: number, seed: number) => {
		return Math.floor(min + (max - min) * seed);
	};

	return (
		<>
			<section className='flex flex-col lg:flex-row justify-center m-10 flex-wrap'>
				{error ? (
					<p>Oh no, there was an error</p>
				) : isLoading || isFetching ? (
					<p>Loading...</p>
				) : streams ? (
					<div className='flex flex-wrap justify-center'>
						{streams
							.sort(() => 0.5 - Math.random())
							.map((stream: Streams) => (
								<div key={stream.id} className='border-2 text-center'>
									<Image
										src={`https://robohash.org/${random(1, 50, Math.random())}`}
										alt={stream.user_name}
										width={250}
										height={250}
									/>

									<h3>{stream.user_name}</h3>
									<h3>Status: {stream.type}</h3>
									<h3>Viewers: {stream.viewer_count}</h3>
								</div>
							))}
					</div>
				) : null}
			</section>
		</>
	);
};

export default StreamerCard;
