import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/nasalogo.png';


export default function() {
    return (
        <div className="nav-wrapper">
<<<<<<< HEAD
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
=======
            <div className="logo">
                <img src={Logo} />
            </div>
        <div className="left-side">
            <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="active-nav-link">Home</NavLink>
            </div> 

            <div className="nav-link-wrapper">
                <NavLink to="/missions" activeClassName="active-nav-link">About</NavLink>
>>>>>>> d5cf700b0c3b5d97269137cfd543c90e33644b0b
            </div>
    
            <div className="nav-link-wrapper">
<<<<<<< HEAD
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
    
=======
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
>>>>>>> d5cf700b0c3b5d97269137cfd543c90e33644b0b
