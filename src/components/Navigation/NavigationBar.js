import React from 'react';
import {Link} from 'react-router-dom';

import "./NavigationBar.css";
import Button from '@material-ui/core/Button';


const NavigationBar = () => {
    return(
        <div id="nav-bar">
            <Link to="/" className="nav-bar__link"><Button>Home</Button></Link>
            <Button component={Link} to="/" className="nav-bar__link"> Cru$h City Home </Button>|
            <Button component={Link} to="htmlRefVsReactRef" className="nav-bar__link"> React Refs </Button>
        </div>
    );
};

export default NavigationBar;
