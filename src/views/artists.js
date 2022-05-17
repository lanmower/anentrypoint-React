import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './artists.css'

const Artists = (props) => {
  return (
    <div className="artists-container">
      <Helmet>
        <title>Artists - anentrypoint</title>
        <meta property="og:title" content="Artists - anentrypoint" />
      </Helmet>
      <div className="artists-container1">
        <Navbar rootClassName="navbar-root-class-name5"></Navbar>
        <iframe
          src="https://budi.247420.xyz/app/artists"
          className="artists-iframe"
        ></iframe>
      </div>
    </div>
  )
}

export default Artists
