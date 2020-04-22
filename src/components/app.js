import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import NavigationContainter from "./navigation/navigation-container";
import NavigationFooter from "./navigation/navigation-footer";
import Home from "./pages/homepage";
import Missions from "./pages/missions";
import Galleries from "./pages/galleries";
import NasaTV from "./pages/nasa_tv";
import follow_nasa from './pages/follow_nasa';
import downloads from './pages/downloads';
import about from './pages/about';
import nasa_audiences from './pages/nasa_audiences';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add( faSearch );


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainter />
            <Switch>
              <Route exact to = "/" component={Home} />
              <Route path="/missions" component={Missions} />
              <Route path="/galleries" component={Galleries} />
              <Route path="/nasa_tv" component={NasaTV} />
              <Route path="/follow_nasa" component={follow_nasa} />
              <Route path="/downloads" component={downloads} />
              <Route path="/about" component={about} />
              <Route path="/nasa_audiences" component={nasa_audiences} />
            </Switch>
            <NavigationFooter />
          </div>
        </Router>
        
      </div>
    );
  }
}