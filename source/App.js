import React, {Component} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Hello from './Hello.js';
import GroceryList from './Grocery.js';
import Search from './Search.js';

import KanbanBoardContainer from './Kanban/KanbanBoardContainer.js';
import ContactsAppContainer from './Contact/ContactsAppContainer.js';
import RoutingApp from './Routing/RoutingApp.js';
import RoutingReact from './RoutingReact/RoutingReact.js';

import MenuApp from './Menu/MenuApp.js';

const web_routes = [
                {
                    to: '/',
                    path: '/',
                    component: Hello,
                    menu_name: 'First'
                },
                {
                    to: '/second',
                    path: '/second',
                    component: GroceryList,
                    menu_name: 'Second'
                },
                {
                    to: '/kanban',
                    path: '/kanban',
                    component: KanbanBoardContainer,
                    menu_name: 'Kanban'
                },
                {
                    to: '/contacts',
                    path: '/contacts',
                    component: ContactsAppContainer,
                    menu_name: 'Contacts'
                },
                {
                    to: '/routing/v1',
                    path: '/routing/v1',
                    component: RoutingApp,
                    menu_name: 'Routing'
                },
                {
                    to: '/routing/v2',
                    path: '/routing/v2',
                    component: RoutingReact,
                    menu_name: 'Routing React'
                }
            ];

class App extends Component {
    render() {
        return (
                <Router>
                <div>
                    {/*<Search />*/}
                    <MenuApp routes={web_routes} />
                </div>
                </Router>    
        );
    }
}

render(<App />, document.getElementById('root'));