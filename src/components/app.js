import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainter from "./navigation/navigation-container";
import NavigationFooter from "./navigation/navigation-footer";
import HomePage from "./pages/homepage";
import Missions from "./pages/missions";
import Galleries from "./pages/galleries";
import NasaTV from "./pages/nasa_tv";
import follow_nasa from './pages/follow_nasa';
import downloads from './pages/downloads';
import about from './pages/about';
import nasa_audiences from './pages/nasa_audiences';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
          <h1>NASA</h1>
          <h2>National Aeronautics and Space Administration</h2>
            <NavigationContainter />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/missions" component={Missions} />
              <Route path="/galleries" component={Galleries} />
              <Route path="/nasa_tv" component={NasaTV} />
              <Route path="/follow_nasa" component={follow_nasa} />
              <Route path="/downloads" component={downloads} />
              <Route path="/about" component={about} />
              <Route path="/nasa_audience" component={nasa_audiences} />
            </Switch>
            <NavigationFooter />
          </div>
        </Router>
        
      </div>
    );
  }
}
