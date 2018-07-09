import React, {Component} from 'react';

import Body from '../Router/Body';
import Header from '../common/Header/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />  
            </div>
        );
    };
};

export default App;
