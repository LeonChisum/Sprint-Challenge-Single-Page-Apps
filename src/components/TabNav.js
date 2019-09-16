import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    const panes = [
    { menuItem: 'Home', render: () => <Tab.Pane><div>
    <h2>Where's My Portal Gun!?</h2>
    <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"></img>
  </div></Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]

    const TabExampleVerticalTabular = () => (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    )

    return(
        <div>
        <div class="ui grid">
            <div class="four wide column">
            <div class="ui fluid vertical tabular menu">
                <a class="active item">Home</a>
                <a class="item">Characters</a>
                <a class="item">Locations</a>
                <a class="item">Episodes</a>
            </div>
            </div>
            <div class="stretched twelve wide column">
            <div class="ui bottom attached segment active tab">Tab 1 Content</div>
            </div>
        </div>
        </div>
    )
};



// export default TabExampleVerticalTabular