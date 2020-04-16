import React from 'react';
import { NavLink } from 'react-router-dom';


export default function() {
    return (
        <div className="footer-wrapper">
          <div className="footer-bar">
              <div className="nasa_logo">
                  Logo was here...
              </div>
            <div className="footer-link-wrapper">
              <NavLink exact to="/" activeClassName="nav-link-active">
                Homepage
              </NavLink>
            </div>
    
            <div className="footer-link-wrapper">
              <NavLink to="/no_fear_act" activeClassName="nav-link-active">
                No Fear Act
              </NavLink>
            </div>
    
            <div className="footer-link-wrapper">
              <NavLink to="/foia" activeClassName="nav-link-active">
                FOIA
              </NavLink>
            </div>
    
            <div className="footer-link-wrapper">
              <NavLink to="/privacy" activeClassName="nav-link-active">
                Privacy
              </NavLink>
            </div>

            <div className="footer-link-wrapper">
              <NavLink to="/inspector" activeClassName="nav-link-active">
                Office of Inspector General
              </NavLink>
            </div>

            <div className="footer-link-wrapper">
              <NavLink to="/counsel" activeClassName="nav-link-active">
                Office of Special Counsel
              </NavLink>
            </div>

            <div className="footer-link-wrapper">
              <NavLink to="/financial" activeClassName="nav-link-active">
                Agency Financial Reports
              </NavLink>
            </div>

            <div className="footer-link-wrapper">
              <NavLink to="/contact" activeClassName="nav-link-active">
                Contact NASA
              </NavLink>
            </div>
          </div>
        </div>
    );
};
    
