import React, {Component} from 'react';

import Hello from './Hello.js';
import GroceryList from './Grocery.js';
import KanbanBoard from './KanbanBoard.js';
import Search from './Search.js';

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the **whole** book",
        status: "in-progress",
        color: '#BD8D31',
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book. The complete source can be found\n\
                      at [github](https://github.com/pro-react)",
        status: "todo",
        color: '#3A7E28',
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
    {
        id: 1,
        title: "This is a new card with a very, very long title, thus having \n\
                more than 80 characters.",
        description: "I should read the **whole** book",
        status: "done",
        color: '#BD8D31',
        tasks: []
    },
];

class App extends Component {
    render() {
        return (
                <div>
                    <Search/>
                    <Hello/>
                    <GroceryList/>
                    <KanbanBoard cards={cardsList} />
                </div>
        );
    }
}

React.render(<App />, document.getElementById('root'));