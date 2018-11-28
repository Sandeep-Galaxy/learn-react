import React, {Component} from 'react';

export default class Hello extends Component {
    render() {
        var name = 'Jones';
        return (
                <div>
                <h1>1. First Component</h1>
                    <div className="text-center">
                        <h4>Hello World!</h4>
                        <h4>Hello {name + ' London'}, What's up?</h4>
                    </div>
                </div>
        );
    }
}
