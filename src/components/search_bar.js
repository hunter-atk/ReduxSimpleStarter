import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'enter search here...' };
    }

    render() {
        return (
            <div>
                <input
                    value={ this.state.term }
                    onChange={event => this.setState({ term: event.target.value })} />
                <div>{this.state.term}</div>
            </div>
        );
    }
}

export default SearchBar;