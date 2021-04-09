import React from 'react';

export default function EpisodeCard({ season }) {
	const { name, episode, air_date } = season;

	return (
		<div className='card-container'>
			<div>
				<h2>{name}</h2>
			</div>
			<div>
				<h4>{episode}</h4>
				<p> {air_date}</p>
			</div>
		</div>
	);
}
