import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - anentrypoint</title>
        <meta property="og:title" content="Blog - anentrypoint" />
      </Helmet>
      <div className="blog-container1">
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="blog-container2"></div>
      </div>
    </div>
  )
}

export default Blog
