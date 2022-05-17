import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import SolidButton from '../components/solid-button'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>anentrypoint</title>
        <meta property="og:title" content="anentrypoint" />
      </Helmet>
      <div className="landing-page-top-container">
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
        <div className="landing-page-container1">
          <div className="landing-page-container2">
            <div className="landing-page-hero">
              <div className="landing-page-container3">
                <h1 className="landing-page-text heading">
                  {' '}
                  𝙄𝙏&apos;𝙎 𝘼𝙉🎙️𝙀𝙉𝙏𝙍𝙔𝙋❍𝙄𝙉𝙏
                </h1>
                <h2 className="landing-page-subheading subheading">
                  point existent
                </h2>
                <div className="landing-page-container4">
                  <div className="landing-page-content-container">
                    <Link to="/artists" className="landing-page-navlink">
                      <SolidButton
                        button="Our Artists"
                        className="landing-page-component1"
                      ></SolidButton>
                    </Link>
                  </div>
                </div>
                <span className="landing-page-text01">
                  <span className="landing-page-text02">
                    we make magic music
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="landing-page-text04">e</span>
                  <span className="landing-page-text05">a</span>
                  <span className="landing-page-text06">
                    ch artist is freshly hand-picked
                  </span>
                  <br></br>
                  <span className="landing-page-text08">
                    &amp; probably entering
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="landing-page-container5"></div>
        </div>
      </div>
      <div className="landing-page-banner">
        <h1 className="landing-page-text09">Our Mission</h1>
        <span className="landing-page-text10">
          <span>
            <span>
              {' '}
              we provide a simple on ramp for artists who wish to get published.
            </span>
          </span>
          <br></br>
          <span>entrypoint is the fourth musical industrial revolution</span>
          <br></br>
          <span>
            get published easily and network in cutting edge ways with a
            community
          </span>
          <br></br>
          <span>of like minded individuals</span>
        </span>
        <button className="landing-page-button button">Read more</button>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>𝘼𝙉 🎙𝙀𝙉𝙏𝙍𝙔𝙋❍𝙄𝙉𝙏</h1>
          <div className="landing-page-links-container">
            <div className="landing-page-container6">
              <Link to="/about-us" className="landing-page-navlink1">
                About us
              </Link>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link"
              >
                <span>Releases</span>
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link1"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="landing-page-follow-container">
            <div className="landing-page-icons-container">
              <a
                href="https://t.me/+8d2Jo6VLZps4ZDlk"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link2"
              >
                <svg viewBox="0 0 1024 1024" className="landing-page-icon">
                  <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"></path>
                </svg>
              </a>
              <a
                href="https://dsc.gg/entrypoint"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link3"
              >
                <img
                  alt="image"
                  src="https://i.ibb.co/Xtm2T4b/9f6f9cd156ce35e2d94c0e62e3eff462.png"
                  className="landing-page-image"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link4"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon2"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
