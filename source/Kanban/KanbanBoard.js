import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';

import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";

import NewCard from './NewCard';
import EditCard from './EditCard';

class KanbanBoard extends Component {
    render() {
        return (
                <div className="kanban-board app">
                <Router>
                    <Link to='/kanban/new' className="float-button">+</Link>
                </Router>
                <List id='todo' title="To Do" cards={
                    this.props.cards.filter((card) => card.status === "todo")
                } taskCallbacks={this.props.taskCallbacks} />
                <List id='in-progress' title="In Progress" cards={
                    this.props.cards.filter((card) => card.status === "in-progress")
                } taskCallbacks={this.props.taskCallbacks} />
                <List id='done' title='Done' cards={
                    this.props.cards.filter((card) => card.status === "done")
                } taskCallbacks={this.props.taskCallbacks} />
                
                <Router>
                    <Switch>
                    <Route path="/kanban/new" render={ (props) => <NewCard {...props} cardCallbacks={this.props.cardCallbacks} />} />
                    <Route path="/kanban/edit/:card_id" render={ (props) => <EditCard {...props} cards={this.props.cards} cardCallbacks={this.props.cardCallbacks} />} />
                    </Switch>        
                </Router>
                
                </div>
                
                
                );
    }
}

KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
    cardCallbacks: PropTypes.object
};

export default KanbanBoard;