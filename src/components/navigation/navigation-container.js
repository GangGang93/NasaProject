import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../images/nasalogo.png';


export default class extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
    }

  render() {
      return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" className="logo">
                        <img src={Logo} />
                    </NavLink>
                </div> 

                <div className="center">
                    <div className="nav-link-wrapper">
                        <NavLink to="/missions">About</NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/galleries">Galleries</NavLink>
                    </div>   

                    <div className="nav-link-wrapper">
                        <NavLink to="/nasa_tv">Nasa TV</NavLink>
                    </div>        

                    <div className="nav-link-wrapper">
                        <NavLink to="follow_nasa">Follow NASA</NavLink>
                    </div>     

                    <div className="nav-link-wrapper">
                        <NavLink to="/downloads">Downloads</NavLink>
                    </div>     

                    <div className="nav-link-wrapper">
                        <NavLink to="/about">About</NavLink>
                    </div>     

                    <div className="nav-link-wrapper">
                        <NavLink to="/nasa_audience">Nasa Audience</NavLink>
                    </div>  

                    <div className="search-bar">
                        <a>
                            <input id="filter" type="text" placeholder="Search" />
                            <FontAwesomeIcon icon="search" />
                        </a>
                    </div>   
                </div>     
            </div>
        )
    }
}
