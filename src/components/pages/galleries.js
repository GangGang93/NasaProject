import React, { Component } from 'react'

import GalleriesNavbar from "../navbars/galleries-navbar";

export default class Galleries extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
              <GalleriesNavbar/>
          </div>
      )
  }
}