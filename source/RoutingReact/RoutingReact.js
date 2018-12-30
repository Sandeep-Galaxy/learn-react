import React, { Component, PropTypes  } from 'react';
import { render } from 'react-dom';

// first we import some components
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails';

const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li>
        <NavLink to={`${match.url}/components`}>Components</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/props-v-state`}>Props v. State</NavLink>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

class RoutingReact extends Component {
    
    render() {
        return (
                <Router>
                <div>
                    <header>App</header>
                    <menu>
                        <ul>
                        <li><NavLink activeClassName="active" to="/routing/v2/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/routing/v2/about">About</NavLink></li>
                        <li><NavLink activeClassName="active" to="/routing/v2/repos">Repos</NavLink></li>
                        <li><NavLink activeClassName="active" to="/routing/v2/topics">Topics</NavLink></li>
                        </ul>
                    </menu>
                    <Route path="/routing/v2/" exact component={Home} />
                    <Route path="/routing/v2/about/" render={(props) => <About title="About Us" />}  />
                    <Route path="/routing/v2/repos"  component={Repos} />
                    {/* Add the route, nested where we want the UI to nest */}
                    <Route path={`/routing/v2/repos/details/:repo_name`}  component={RepoDetails} />
                    <Route path="/routing/v2/topics"  component={Topics} />
                </div>
                </Router>
                )
        }
}

export default RoutingReact;