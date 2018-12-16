import React, { Component } from 'react';
/* import {render} from 'react-dom';*/

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "React"
        };
    }
    
    handleChange(){
        this.setState({searchTerm: event.target.value.substr(0,5)});
    }
    
    render() {
        return (
                <div>
                    Search Term: <input type="checkbox" checked="true" /> <input type="search" onChange={this.handleChange.bind(this)} value={this.state.searchTerm} />
                </div>
                )
    }
}
export default Search;