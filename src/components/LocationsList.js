import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard'
import Axios from 'axios';

export default function LocationsList() {
    const[locations, setLocations] = useState([])
    useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                console.log(res.data.results)
                setLocations(res.data.results)
            })
            .catch(err => {
                alert(`${err}`)
            })
    }, []);

    return(
        <section className="character-list grid-view">
            <div>
                {locations.map(location => (
                    <LocationCard key={location.id} location={location}/>
                ))}
            </div>
        </section>
    )
}
