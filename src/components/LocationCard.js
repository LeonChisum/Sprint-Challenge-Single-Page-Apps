import React from 'react';

export default function LocationCard({ location }) {
	const { name, type, dimension, residents } = location;

	return (
		<div className='card-container'>
			<div>
				<h2>{name}</h2>
			</div>

			<div>
				<h4>
					{' '}
					{type} - {dimension}
				</h4>
				<p>{residents.length} residents</p>
			</div>
		</div>
	);
}
