import React from 'react';
import { NavLink } from 'react-router-dom';


export default function() {
    return (
        <div className="nav-wrapper">
          <div className="nav-bar">
              <div className="nasa_logo">
                  Logo was here...
              </div>
            <div className="nav-link-wrapper">
              <NavLink exact to="/" activeClassName="nav-link-active">
                Homepage
              </NavLink>
            </div>
    
            <div className="nav-link-wrapper">
              <NavLink to="/missions" activeClassName="nav-link-active">
                Missions
              </NavLink>
            </div>
    
            <div className="nav-link-wrapper">
              <NavLink to="/galleries" activeClassName="nav-link-active">
                Galleries
              </NavLink>
            </div>
    
            <div className="nav-link-wrapper">
              <NavLink to="/nasa_tv" activeClassName="nav-link-active">
                Nasa Tv
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/follow_nasa" activeClassName="nav-link-active">
                Follow Nasa
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/downloads" activeClassName="nav-link-active">
                Downloads
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/about" activeClassName="nav-link-active">
                About
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/nasa_audiences" activeClassName="nav-link-active">
                Nasa Audiences
              </NavLink>
            </div>
          </div>
        </div>
    );
};
    