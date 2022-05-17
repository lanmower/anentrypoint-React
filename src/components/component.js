import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <h1 className="component-text">{props.heading}</h1>
      <iframe src={props.iframe_src} className="component-iframe"></iframe>
      <span className="component-text1">{props.text}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  body: 'bla',
  text1: 'Text',
  text: 'Text',
  heading: 'Heading',
  iframe_src: 'https://www.youtube.com/embed/DeQkMK5LME4',
}

AppComponent.propTypes = {
  body: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  iframe_src: PropTypes.string,
}

export default AppComponent
