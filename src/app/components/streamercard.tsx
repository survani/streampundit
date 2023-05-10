import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useState } from 'react';

const StreamerCard = () => {
	type Streams = {
		id: number;
		user_name: string;
		type: string;
		viewer_count: number;
		thumbnail_url: string;
	};

	//FIXME: Make sure we add enviroment variables here before we push...
	async function getUsers() {
		const res = await fetch('https://api.twitch.tv/helix/streams?first=50', {
			method: 'get',
			headers: {
				Authorization: `Bearer ${'wgscm1el3g8mipk3qckv4vov6tyo5u'}`,
				'Content-Type': 'application/json',
				'Client-Id': 'g9hjo173mm3ngrjedk6njpgl1m4xo6',
			},
		});
		const streams = await res.json();
		return streams.data;
	}

	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ['hydrate-streams'],
		queryFn: () => getUsers(),
	});

	async function getOne() {
		const res = await fetch(`https://api.twitch.tv/helix/users?${data.id}`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${'wgscm1el3g8mipk3qckv4vov6tyo5u'}`,
				'Content-Type': 'application/json',
				'Client-Id': 'g9hjo173mm3ngrjedk6njpgl1m4xo6',
			},
		});
		const streams = await res.json();
		return streams.data;
	}

	return (
		<>
			<section className='flex flex-col lg:flex-row justify-center m-10 flex-wrap'>
				{error ? (
					<p>Oh no, there was an error</p>
				) : isLoading || isFetching ? (
					<p>Loading...</p>
				) : data ? (
					<div className='flex flex-wrap justify-center'>
						{data.map((stream: Streams) => (
							<div key={stream.id} className='border-2 text-center'>
								<Image
									src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${stream.user_name}-200x113.jpg`}
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
