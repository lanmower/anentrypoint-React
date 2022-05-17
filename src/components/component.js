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
  text1: 'Text',
  iframe_src: 'https://www.youtube.com/embed/DeQkMK5LME4',
  text: 'Text',
  heading: 'Heading',
  body: 'bla',
}

AppComponent.propTypes = {
  text1: PropTypes.string,
  iframe_src: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  body: PropTypes.string,
}

export default AppComponent
