import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem.js';

class ContactList extends Component {
    render() {
        
        let filteredContacts = this.props.contacts.filter(
                (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );

        return(
                <div className="row" style={{marginTop: 15+'px'}}>
                    <div className="">
                        <ul>
                            {filteredContacts.map(
                                                (contact) => <ContactItem key={contact.email}
                                                             name={contact.name}
                                                             email={contact.email} />
                                        )}
                        </ul>
                    </div>
                </div>
                )
    }
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactList;