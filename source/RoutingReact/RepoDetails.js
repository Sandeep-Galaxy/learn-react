import React, { Component } from 'react';
import 'whatwg-fetch';

class RepoDetails extends Component {
    constructor({match}) {
        super(...arguments);
        this.state = {
            repository: {}
        };
        this.match = match;
    }
    fetchData(repo_name) {
        fetch('https://api.github.com/repos/pro-react/' + repo_name)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({repository: responseData});
                });
    }
    componentDidMount() {
// The Router injects the key "repo_name" inside the params prop
        let repo_name = this.match.params.repo_name;
        this.fetchData(repo_name)
    }
    componentWillReceiveProps(nextProps) {
// The Router injects the key "repo_name" inside the params prop
        let repo_name = nextProps.match.params.repo_name;
        this.fetchData(repo_name)
    }
    render() {
        let stars = [];
        for (var i = 0; i < this.state.repository.stargazers_count; i++) {
            stars.push('★');
        }

        return (
                <div>
                    <h2>{this.state.repository.name}</h2>
                    <p>{this.state.repository.description}</p>
                    <span>{stars}</span>
                </div>
                );
    }
}

export default RepoDetails;