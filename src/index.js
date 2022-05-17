import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LandingPage from './views/landing-page'
import AboutUs from './views/about-us'
import Releases from './views/releases'
import Artists from './views/artists'
import Blog from './views/blog'
import Videos from './views/videos'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={LandingPage} path="/home" />
        <Route exact component={AboutUs} path="/about-us" />
        <Route exact component={Releases} path="/releases" />
        <Route exact component={Artists} path="/artists" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={Videos} path="/videos" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
