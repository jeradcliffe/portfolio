import React from 'react';
import {Link} from 'react-router-dom';

import "./NavigationBar.css";

const NavigationBar = () => {
    return(
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <ion-icon name="home"/>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Dropdown</a>
                        <div className="dropdown-menu">
                            <Link to="/htmlRefVsReactRef" className="dropdown-item">Demo1</Link>
                            <Link to="/htmlRefVsReactRef" className="dropdown-item">Demo2</Link>
                            <Link to="/htmlRefVsReactRef" className="dropdown-item">Demo3</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Nav Link 3</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Nav Link 4</Link>
                    </li>
                </ul>
                
                <div>
                    <a href="https://github.com/jeradcliffe/" target="_blank" className="nav-item">
                        <ion-icon name="code"/>
                    </a>      
                    <a href="https://www.linkedin.com/in/jacob-radcliffe-36a20579" target="_blank" className="nav-item">
                        <ion-icon name="logo-linkedin"/>
                    </a>
                </div>
            </nav>
            
    );
};

export default NavigationBar;
