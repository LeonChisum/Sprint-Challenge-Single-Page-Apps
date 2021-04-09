import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { Card } from 'semantic-ui-react';

export default function EpisodeList() {
	const [episodes, setEpisodes] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		Axios.get('https://rickandmortyapi.com/api/episode/')
			.then((res) => {
				console.log(res.data.results);
				setEpisodes(res.data.results);
			})
			.catch((err) => {
				alert(`${err}`);
			});
	}, []);

	return (
		<section className='character-list grid-view'>
			<div className='flex'>
				{episodes.map((episode) => (
					<Card key={episode.id} className='card-view'>
						<EpisodeCard season={episode} />
					</Card>
				))}
			</div>
		</section>
	);
}
