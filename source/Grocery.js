import React, { Component } from 'react';
// Parent Component
export default class GroceryList extends Component {
    render() {
        return (
                <div>
                <h1>2. Second Component</h1>
                <div className="text-center">
                    <h4>Grocery List</h4>
                    <ul id="name_attributes">
                    <ListItem quantity="1" name="Bread" />
                    <ListItem quantity="6" name="Eggs" />
                    <ListItem quantity="2" name="Milk" />

                    <ListItemCh quantity="5">Banana</ListItemCh>
                    <ListItemCh quantity="9">Apple</ListItemCh>
                    <ListItemCh quantity="7">Orange</ListItemCh>
                    </ul>
                </div>
                </div>
               );
    }
}
// Child Component
class ListItem extends Component {
    render() {
        return (
            <li>
            {this.props.quantity} × {this.props.name}
            </li>
        );
    }
}

// Child Component
class ListItemCh extends Component {
    render() {
        return (
            <li>
            {this.props.quantity} × {this.props.children}
            </li>
        );
    }
}
