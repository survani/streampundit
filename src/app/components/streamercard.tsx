'use client';

import { FireIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { randomNumber } from './helpers';
import { Streams } from './streamtypes';

const StreamerCard = () => {
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
								<div
									key={stream.id}
									className='relative border-2 text-center m-2 '
								>
									<Link href={`https://www.twitch.tv/${stream.user_name}`}>
										<Image
											src={`https://robohash.org/${randomNumber(
												1,
												100,
												Math.random()
											)}`}
											alt={stream.user_name}
											width={250}
											height={250}
											loading='lazy'
											placeholder='blur'
											blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=='
										/>
										<div className='absolute top-3 left-2'>
											{stream.type == 'live' ? (
												<div className='flex'>
													<FireIcon className='h-6 w-6 mr-2 text-red-500' />
													<h3>Viewers: {stream.viewer_count}</h3>
												</div>
											) : (
												<div className='flex'>
													<FireIcon className='h-6 w-6 mr-2 text-grey-500' />
													<h3>Offline</h3>
												</div>
											)}
										</div>
									</Link>
									<div className='bg-indigo-400 '>
										<h3 className='text-xl font-bold'>{stream.user_name}</h3>
									</div>
								</div>
							))}
					</div>
				) : null}
			</section>
		</>
	);
};

export default StreamerCard;
