import React, {Component} from 'react';

import Hello from './Hello.js';
import GroceryList from './Grocery.js';

class App extends Component {
    render() {
        return (
                <div>
                    <Hello/>
                    <GroceryList/>
                </div>
        );
    }
}

React.render(<App />, document.getElementById('root'));