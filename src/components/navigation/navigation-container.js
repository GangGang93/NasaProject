import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from '../../images/nasalogo.png';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

export default class NavigationContainer extends Component {
    constructor(props) {
      super(props);
    } 
    
    render() {
        return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" className="logo" activeClassName="nav-link-active">
                        <img src={Logo} />
                    </NavLink>
                </div> 

                <div className="center">
                    <div className="nav-link-wrapper" >
                        <a href="https://www.nasa.gov/missions" activeClassName="nav-link-active">
                                <h1>Missions</h1>
                        </a>
                    </div>

                    <div className="nav-link-wrapper" >
                        <NavLink to="/galleries" activeClassName="nav-link-active">
                            Galleries
                        </NavLink>
                    </div>   

                    <div className="nav-link-wrapper">
                        <a href="https://www.nasa.gov/multimedia/nasatv/index.html#public" activeClassName="nav-link-active">
                            <h1>Nasa Tv</h1>
                        </a>
                    </div>        

                    <div className="nav-link-wrapper">
                        <NavLink to="/follow_nasa" activeClassName="nav-link-active">
                            Follow NASA
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

                    <div className="nav-link-wrapper" >
                        <NavLink to="/nasa_audience" activeClassName="nav-link-active">
                            Nasa Audience
                        </NavLink>
                    </div>  

                    <div className="search-bar">
                        <a  activeClassName="nav-link-active">
                            <input id="filter" type="text" placeholder="Search" />
                            <FontAwesomeIcon icon="search" />
                        </a>
                    </div>   
                </div>     
            </div>
        );
    }
};
