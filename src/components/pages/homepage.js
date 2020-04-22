import React, { Component } from 'react';
import Typist from 'react-typist';


export default class Homepage extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
        <div className="background">
          <div className="homepage-container">

            <div className="top-home">
                <div className="top-left-home">
                    <img src={require('../../images/spaceFace.jpg')} />
                </div>

                <div className="top-center-home">
                    <div className="top-text">
                    <Typist>
                        <p> Welcome to NASA </p>
                        <Typist.Delay ms={500} />
                        <br />
                        ALIENS EXIST!!!
                        <Typist.Backspace count={15} delay={200} />
                        Ignore that...
                        <br />
                        <Typist.Delay ms={500} />
                        Discover more about the universe that you are a part of!
                        <br />
                        Dive deep! Immerse yourself with dazziling new information,
                        <br />
                        <Typist.Delay ms={500} />
                        be careful not to get to close to any black holes!
                        </Typist>
                    </div>
                </div>
            

                <div className="top-right-home">
                    <div className='top-right-pics'>
                        <div className="sub1-top-right-home">
                            <img className="sub1" src={require('../../images/aurora-iss.jpg')} />
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
                    <img src={require('../../images/ISSLady.jpg')} />
                </div>

                <div className="middle-center-home">
                    <img src={require('../../images/voyager.png')} />
                </div>

                <div className="middle-right-home">
                    <img src={require('../../images/NASAQuasarTsunami.jpg')} />
                </div>
            </div>

            <div className="bottom-home">
                <div className="bottom-left-home">
                <img src={require('../../images/universeMan.jpg')} />
                </div>

                <div className="bottom-centers-home">
                    <div className="bottom-center1-home">
                    <img src={require('../../images/fake-news-lol-jk.jpg')} />
                    </div>
                    <div className="bottom-center2-home">
                    <img src={require('../../images/NASAQuasarTsunami.jpg')} />
                    </div>
                </div>

                <div className="bottom-right-home">
                    <img src={require('../../images/voyagerFloat.jpg')} />
                </div>
            </div>
          </div>
        </div>
      )
  }
}