import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
    return (
    <div className="footer-wrapper">
        <div className="footer-bar">
            <div className="nasa-logo">Logo was here...</div>
            <div className="footer-link-wrapper">
             <NavLink to="/no_fear_act" activeClassName="nav-link-wrapper">No Fear Act </NavLink>
        </div>
        <div className="footer-link-wrapper">
             <NavLink to="/FOIA" activeClassName="nav-link-wrapper">Freedom Of Information Act</NavLink>
        </div>
        <div className="footer-link-wrapper">
             <NavLink to="/privacy" activeClassName="nav-link-wrapper">Privacy</NavLink>
        </div>
        <div className="footer-link-wrapper">
             <NavLink to="/inspector" activeClassName="nav-link-wrapper">Office of Inspector General</NavLink>
        </div>
        <div className="footer-link-wrapper">
             <NavLink to="/counsel" activeClassName="nav-link-wrapper">Office of Special Counsel</NavLink>
        </div>
        <div className="footer-link-wrapper">
             <NavLink to="/financials" activeClassName="nav-link-wrapper">Agency Financial Reports</NavLink>
        </div>
        <div className="footer-link-wrapper">
             <NavLink to="/contact" activeClassName="nav-link-wrapper">Contact NASA</NavLink>
        </div>
        </div>
    </div>
  );
};