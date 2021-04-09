import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import { Card } from 'semantic-ui-react';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		Axios.get('https://rickandmortyapi.com/api/character/')
			.then((res) => {
				// console.log(res.data.results)
				setCharacters(res.data.results);
			})
			.catch((err) => {
				alert(`${err}`);
			});
	}, [characters]);

	return (
		<section className='character-list grid-view'>
			<div className='ui bottom attached segment active tab flex'>
				{characters.map((person) => (
					<CharacterCard key={person.id} character={person} />
				))}
			</div>
		</section>
	);
}
