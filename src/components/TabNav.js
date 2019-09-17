import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";


// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/


//     const panes = [
//     { menuItem: 'Home', render: () => <Tab.Pane>
//                                         <h2>Where's My Portal Gun!?</h2>
//                                         <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"></img>
//                                       </Tab.Pane> },
//     { menuItem: 'Characters', render: () => <Tab.Pane>
//                                                 <CharacterList/>
//                                             </Tab.Pane> },
//     { menuItem: 'Locations', render: () => <Tab.Pane>
//                                                 <LocationsList/>
//                                             </Tab.Pane> },
//     { menuItem: 'Episodes', render: () => <Tab.Pane>
//                                             <EpisodeList/>
//                                         </Tab.Pane> },
//     ]

//     const TabExampleVerticalTabular = () => (
//     <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
//     )
// export default TabExampleVerticalTabular
const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const welcomeLabel = createLabel("home", "Home Page")
const characterLabel = createLabel("users", "Characters")
const locationsLabel = createLabel("map", "Locations")
const episodesLabel = createLabel("video", "Episodes")

const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='characters' as={Nav} to={`/characters`} content={characterLabel} /> },
  { menuItem: <Menu.Item key='locations' as={Nav} to={`/locations`} content={locationsLabel} /> },
  { menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodes`} content={episodesLabel} /> },
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav