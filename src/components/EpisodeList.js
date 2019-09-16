import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
const [episodes, setEpisodes] = useState([]);

useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
            console.log(res.data.results)
            setEpisodes(res.data.results)
        })
        .catch(err => {
            alert(`${err}`)
        })
}, []);

return (
    
    <section className="character-list grid-view">
        <div>
        {episodes.map(episode => (
            <EpisodeCard key={episode.id} season={episode} />
))}
        </div>
    </section>
);
}