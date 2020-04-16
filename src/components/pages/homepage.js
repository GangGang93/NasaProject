import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
<<<<<<< HEAD
          <div>
              ...
=======
          <div className="homepage-container">
            <div className="top-home">
                <div className="top-left-home">
                    <img src={require('../../images/spaceFace.jpg')} />
                </div>

                <div className="top-center-home">
                     Today's schedule of NASA at Home activities (all times EDT):

                        10 a.m. - Daily NASA TV programming, including "NASA X  - Future Forward"" and "Astrobiology in the Field"
                        12 p.m. - Earth Science video demonstration and activity about land cover mapping
                        2 p.m. – Apollo 13 50th Anniversary – Apollo 13: Home Safe 
                        2 p.m. - NASA’s Hubble Space Telescope Documentary
                        4 p.m. - Repeat of 10 a.m. NASA TV programming
                        4 p.m. - Astronaut Christina Koch reads the children's book "Runaway Bunny" on Instagram Live
                        7 p.m. - On NASA TV, Apollo 13: Houston, We’ve Had a Problem 

                        Full NASA TV schedule
                    
                </div>

                <div className="top-right-home">
                    <div className="top-rights-home">
                        <div className="sub1-top-right-home">
                        <img src={require('../../images/planetSun.jpg')} />
                        </div>
                        <div className="sub2-top-right-home">
                        <img src={require('../../images/hubble.jpg')} />
                        </div>
                    </div>

                    <div className="sub3-top-right-home">
                    <img src={require('../../images/ISS.jpg')} />
                    </div>
                </div>
            </div>

            <div className="middle-home">
                <div className="middle-left-home">

                </div>
                <div className="middle-center-home">

                </div>
                <div className="middle-right-home">

                </div>
            </div>

            <div className="bottom-home">
                <div className="bottom-left-home"></div>
                <div className="bottom-center1-home"></div>
                <div className="bottom-center2-home"></div>
                <div className="bottom-right-home"></div>
            </div>
              
>>>>>>> d5cf700b0c3b5d97269137cfd543c90e33644b0b
          </div>
      )
  }
}