import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import AppComponent from '../components/component'
import './videos.css'

const Videos = (props) => {
  return (
    <div className="videos-container">
      <Helmet>
        <title>Videos - anentrypoint</title>
        <meta property="og:title" content="Videos - anentrypoint" />
      </Helmet>
      <div className="videos-container1">
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <div className="videos-container2">
          <AppComponent body="blue"></AppComponent>
          <AppComponent body="blue"></AppComponent>
        </div>
      </div>
    </div>
  )
}

export default Videos
