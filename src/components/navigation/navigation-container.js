import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../images/nasalogo.png';

export default class extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
        <div className="nav-wrapper">
            <div className="logo">
                <img src={Logo} />
            </div>
        <div className="left-side">
            <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="active-nav-link">Home</NavLink>
            </div> 

            <div className="nav-link-wrapper">
                <NavLink to="/missions" activeClassName="active-nav-link">About</NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to="/galleries" activeClassName="active-nav-link">Galleries</NavLink>
            </div>   

            <div className="nav-link-wrapper">
                <NavLink to="/nasa_tv" activeClassName="active-nav-link">Nasa TV</NavLink>
            </div>        

            <div className="nav-link-wrapper">
                <NavLink to="follow_nasa" activeClassName="active-nav-link">Follow NASA</NavLink>
            </div>     

            <div className="nav-link-wrapper">
                <NavLink to="/downloads" activeClassName="active-nav-link">Downloads</NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to="/nasa_audience" activeClassName="active-nav-link">Nasa Audience</NavLink>
            </div>     
        </div>     

    </div>
      )
  }
}