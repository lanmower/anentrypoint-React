import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About Us - anentrypoint</title>
        <meta property="og:title" content="About Us - anentrypoint" />
      </Helmet>
      <div className="about-us-container1">
        <Navbar rootClassName="navbar-root-class-name1"></Navbar>
        <div className="about-us-container2"></div>
      </div>
    </div>
  )
}

export default AboutUs
