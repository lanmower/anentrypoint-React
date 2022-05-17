import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './releases.css'

const Releases = (props) => {
  return (
    <div className="releases-container">
      <Helmet>
        <title>Releases - anentrypoint</title>
        <meta property="og:title" content="Releases - anentrypoint" />
      </Helmet>
      <div className="releases-container1">
        <Navbar rootClassName="navbar-root-class-name2"></Navbar>
        <div className="releases-container2"></div>
      </div>
    </div>
  )
}

export default Releases
