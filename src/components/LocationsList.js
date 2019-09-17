import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard'
import Axios from 'axios';
import { Card } from 'semantic-ui-react';

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
                    <Card key={location.id}>
                        <LocationCard  location={location}/>
                    </Card>
                ))}
            </div>
        </section>
    )
}
