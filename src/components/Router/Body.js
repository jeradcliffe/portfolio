import React from 'react'
import {Switch, Route} from 'react-router-dom';

import './Body.css';
import Home from '../Home/Home';
import HTMLRefVsReactRef from '../RefExamples/HTMLRefVsReactRef';

const Body = () => {
  return(
    <div className="body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/htmlRefVsReactRef" component={HTMLRefVsReactRef} />
      </Switch>
    </div>
  );
};

export default Body;
