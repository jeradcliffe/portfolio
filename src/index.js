import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import {themeStyles} from './themeStyles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme(themeStyles);

ReactDOM.render(
    <BrowserRouter> 
        <MuiThemeProvider theme={theme} >
            <App />
        </MuiThemeProvider>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
