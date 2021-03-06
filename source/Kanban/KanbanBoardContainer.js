import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import update from 'react-addons-update';

import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";

// Polyfills
import 'whatwg-fetch';
import 'babel-polyfill';

// If you're running the server locally, the URL will be, by default, localhost:3000
// Also, the local server doesn't need an authorization header.
const API_URL = 'http://kanbanapi.pro-react.com';
const CARDS_URL =  API_URL + '/cards';

const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'soron-lEaRn-pRo-5acT'// The Authorization is not needed for local server
};

class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards: [],
        };
    }

    addCard(card) {
// Keep a reference to the original state prior to the mutations
// in case we need to revert the optimistic changes in the UI
        let prevState = this.state;
// Add a temporary ID to the card
        if (card.id === null) {
            let card = Object.assign({}, card, {id: Date.now()});
        }
// Create a new object and push the new card to the array of cards
        let nextState = update(this.state.cards, {$push: [card]});
// set the component state to the mutated object
        this.setState({cards: nextState});
// Call the API to add the card on the server
        fetch(`${API_URL}/cards`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(card)
        }).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
// Throw an error if server response wasn't 'ok'
// so we can revert back the optimistic changes
// made to the UI.
                throw new Error("Server response wasn't OK")
            }
        })
                .then((responseData) => {
// When the server returns the definitive ID
// used for the new Card on the server, update it on React
                    card.id = responseData.id
                    this.setState({cards: nextState});
                })
                .catch((error) => {
                    this.setState(prevState);
                });
    }

    updateCard(card) {
// Keep a reference to the original state prior to the mutations
// in case we need to revert the optimistic changes in the UI
        let prevState = this.state;
// Find the index of the card
        let cardIndex = this.state.cards.findIndex((c) => c.id == card.id);
// Using the $set command, we will change the whole card
        let nextState = update(
                this.state.cards, {
                    [cardIndex]: {$set: card}
                });
// set the component state to the mutated object
        this.setState({cards: nextState});
// Call the API to update the card on the server
        fetch(`${API_URL}/cards/${card.id}`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify(card)
        })
                .then((response) => {
                    if (!response.ok) {
// Throw an error if server response wasn't 'ok'
// so we can revert back the optimistic changes
// made to the UI.
                        throw new Error("Server response wasn't OK")
                    }
                })
                .catch((error) => {
                    console.error("Fetch error:", error)
                    this.setState(prevState);
                });
    }
    
    updateCardStatus(){
        
    }
    
    updateCardPosition(){
        
    }
    
    persistCardMove(){
        
    }
                   
    addTask(cardId, taskName) {
        
        // Keep a reference to the original state prior to the mutations
        // in case you need to revert the optimistic changes in the UI
        let prevState = this.state;
    
        // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        // Create a new task with the given name and a temporary ID
        let newTask = {id: Date.now(), name: taskName, done: false};

        // Create a new object and push the new task to the array of tasks
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$push: [newTask]}
            }
        });
        // set the component state to the mutated object
        this.setState({cards: nextState});
        // Call the API to add the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
        })
        .then((response) => {
            if (!response.ok) {
                // Throw an error if server response wasn't 'ok'
                // so you can revert back the optimistic changes
                // made to the UI.
                throw new Error("Server response wasn't OK")
            }
            
            return response.json();
        })
        .then((responseData) => {
        // When the server returns the definitive ID
        // used for the new Task on the server, update it on React
                    newTask.id = responseData.id
                    this.setState({cards: nextState});
                })
        .catch((error) => {
            console.error("Fetch error:",error)
            this.setState(prevState);
        });
    }
    
    deleteTask(cardId, taskId, taskIndex) {
        
        // Keep a reference to the original state prior to the mutations
        // in case you need to revert the optimistic changes in the UI
        let prevState = this.state;
    
        // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        
        // Create a new object without the task
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$splice: [[taskIndex, 1]]}
            }
        });
        // set the component state to the mutated object
        this.setState({cards: nextState});
        
        // Call the API to remove the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'delete',
            headers: API_HEADERS
        })
        .then((response) => {
            if (!response.ok) {
                // Throw an error if server response wasn't 'ok'
                // so you can revert back the optimistic changes
                // made to the UI.
                throw new Error("Server response wasn't OK")
            }
        })
        .catch((error) => {
            console.error("Fetch error:",error)
            this.setState(prevState);
        });
    }
    
    toggleTask(cardId, taskId, taskIndex) {
        // Keep a reference to the original state prior to the mutations
        // in case you need to revert the optimistic changes in the UI
        let prevState = this.state;
    
        // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        // Save a reference to the task's 'done' value
        let newDoneValue;
        // Using the $apply command, you will change the done value to its opposite
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {
                    [taskIndex]: {
                        done: {$apply: (done) => {
                                newDoneValue = !done
                                return newDoneValue;
                            }
                        }
                    }
                }
            }
        });

        // set the component state to the mutated object
        this.setState({cards: nextState});
        // Call the API to toggle the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({done: newDoneValue})
        })
        .then((response) => {
            if (!response.ok) {
                // Throw an error if server response wasn't 'ok'
                // so you can revert back the optimistic changes
                // made to the UI.
                throw new Error("Server response wasn't OK")
            }
        })
        .catch((error) => {
            console.error("Fetch error:",error)
            this.setState(prevState);
        });
    
    }

    componentDidMount() {
        fetch(CARDS_URL, {headers: API_HEADERS})
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({cards: responseData});
                })
                .catch((error) => {
                    console.log('Error fetching and parsing data', error);
                });
    }

    render() {
        return (
        <div>
            <KanbanBoard cards={this.state.cards} taskCallbacks={{
                                            toggle: this.toggleTask.bind(this),
                                            delete: this.deleteTask.bind(this),
                                                         add: this.addTask.bind(this) }} 
                         cardCallbacks={{
                                        addCard: this.addCard.bind(this),
                                        updateCard: this.updateCard.bind(this),
                                        updateStatus: this.updateCardStatus.bind(this),
                                        updatePosition: null/*throttle(this.updateCardPosition.bind(this), 500)*/,
                                        persistMove: this.persistCardMove.bind(this) }} />
        </div>);
                
        }
}

export default KanbanBoardContainer;    