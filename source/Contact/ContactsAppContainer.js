import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsApp from './ContactsApp.js';
import 'whatwg-fetch';

class ContactsAppContainer extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        };
    }
    componentDidMount() {
        fetch('./public/contacts.json')
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({contacts: responseData});
                }
                )
                .catch((error) => {
                    console.log('Error fetching and parsing data', error);
                });
    }
    render() {
        return (
                <ContactsApp contacts={this.state.contacts} />
                );
    }
}

export default ContactsAppContainer;