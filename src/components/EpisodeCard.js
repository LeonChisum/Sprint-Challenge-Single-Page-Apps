import React from 'react';

export default function EpisodeCard({season}) {
    const { name, episode, air_date} = season;

    return(
        <div>
            <h2>{ name }</h2>
            <h4>{ episode }</h4>
            <div>
                <p> { air_date }</p>
            </div>
        </div>
    )

}
