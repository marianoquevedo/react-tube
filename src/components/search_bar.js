import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input type="text"
                    value={this.state.term}
                    onChange={this.onInputChange} />
            </div>
        );
    }

    onInputChange = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onSearchTermChanged(term);
    }
};

export default SearchBar;