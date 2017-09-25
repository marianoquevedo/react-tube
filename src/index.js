import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'MYKEY';

// create a new component
// this component should produce html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//  takes this component's generated HTML and put it on the page (the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
