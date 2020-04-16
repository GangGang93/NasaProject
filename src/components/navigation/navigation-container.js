import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
    return (
    <div className="nav-wrapper">
        <div className="nave-bar">
            <div className="nasa-logo"></div>
            <div className="nav-link-wrapper">
             <NavLink exact to="/" activeClassName="nav-link-wrapper">HomePage</NavLink>
        </div>
        <div className="nav-link-wrapper">
             <NavLink to="/missions" activeClassName="nav-link-wrapper">Missions</NavLink>
        </div>
        <div className="nav-link-wrapper">
             <NavLink to="/galleries" activeClassName="nav-link-wrapper">Galleries</NavLink>
        </div>
        <div className="nav-link-wrapper">
             <NavLink to="/nasa_tv" activeClassName="nav-link-wrapper">NASA TV</NavLink>
        </div>
        <div className="nav-link-wrapper">
             <NavLink to="/follow_nasa" activeClassName="nav-link-wrapper">Follow Nasa</NavLink>
        </div>
        <div className="nav-link-wrapper">
             <NavLink to="/downloads" activeClassName="nav-link-wrapper">Downloads</NavLink>
        </div>
        <div className="nav-link-wrapper">
             <NavLink to="/about" activeClassName="nav-link-wrapper">About</NavLink>
        </div>
        <div className="nav-link-wrapper">
             <NavLink to="/nasa_audience" activeClassName="nav-link-wrapper">NASA Audience</NavLink>
        </div>
        </div>
    </div>
  );
};