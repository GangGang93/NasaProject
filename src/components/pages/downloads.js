import React, { Component } from 'react'

import DownloadsNavbar from "../navbars/downloads-navbar";


export default class Downloads extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
              <DownloadsNavbar/>
          </div>
      )
  }
}