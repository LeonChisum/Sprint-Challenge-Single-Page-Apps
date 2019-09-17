import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard"
import CharacterList from "./components/CharacterList.js";
import EpisodeList from './components/EpisodeList'
import LocationsList from "./components/LocationsList.js";
import TabNav from "./components/TabNav.js";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" render={() =>  <div>
                                            <h2>Where's My Portal Gun!?</h2>
                                            <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"></img>
                                          </div>}/>
      <Route exact path="/characters" component={CharacterList}/>
      <Route path="/locations" component={LocationsList}/>
      <Route path="/episodes" component={EpisodeList} />
    </main>
  );
}
