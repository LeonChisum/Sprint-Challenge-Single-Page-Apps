import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard"
import CharacterList from "./components/CharacterList.js";
import EpisodeList from './components/EpisodeList'
import LocationsList from "./components/LocationsList.js";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      {/* <div>
        <h2>Where's My Portal Gun!?</h2>
        <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"></img>
      </div> */}
      
    </main>
  );
}
