import React, {Component} from 'react';

import './App.css';
import Body from '../Router/Body';
import Header from '../common/Header/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Body />  
            </div>
        );
    };
};

export default App;
