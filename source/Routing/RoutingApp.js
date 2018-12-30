import React, { Component } from 'react';

import About from './About';
import Home from './Home';
import Repos from './Repos';

class RoutingApp extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            });
        });
    }
    render() {
        var Child;
        switch (this.state.route) {
            case '/routing/v1/about':
                Child = About;
                break;
            case '/routing/v1/r_repos':
                Child = Repos;
                break;
            default:
                Child = Home;
        }
        return (
                <div>
                <header>App</header>
                <menu>
                <ul>
                <li><a href="#/routing/v1/home">Home</a></li>
                <li><a href="#/routing/v1/about">About</a></li>
                <li><a href="#/routing/v1/r_repos">Repos</a></li>
                </ul>
                </menu>
                <Child/>
                </div>
                )
        }
}

export default RoutingApp;