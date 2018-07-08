import React from 'react';
import {Link} from 'react-router-dom';

import "./NavigationBar.css";

const NavigationBar = () => {
    return(
        <div id="nav-bar">
            <Link to="/" className="nav-bar__link"> Cru$h City Home | </Link>
            <Link to="htmlRefVsReactRef" className="nav-bar__link"> React Refs </Link>
        </div>
    );
};

export default NavigationBar;
