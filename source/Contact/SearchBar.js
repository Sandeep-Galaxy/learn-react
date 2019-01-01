import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    handleChange(event) {
        this.props.onUserInput(event.target.value)
    }
    
    render() {
        return (
                <div className="row">
                    <div className="input-group">
                        <input type="search" className="form-control" onChange={this.handleChange.bind(this)} placeholder="search" value={this.props.filterText} />
                    </div>
                </div>
               );
    }
}

// Don't forget to add the new propType requirements
SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
}

export default SearchBar;