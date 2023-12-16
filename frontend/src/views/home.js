import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Accurate Jubilant Flamingo</title>
        <meta property="og:title" content="Accurate Jubilant Flamingo" />
      </Helmet>
      <div className="home-vcard-container">
        <div className="home-step1">
          <div className="home-title-bar">
            <button type="button" className="home-button button">
              Step 1
            </button>
            <span>Choose a template</span>
          </div>
          <div className="home-card-types">
            <div className="home-card-container">
              <img
                src="/template-0-300w.webp"
                alt="image"
                className="home-image"
              />
              <input type="radio" name="radio" className="home-radiobutton" />
            </div>
            <div className="home-card-container1">
              <img
                src="/template-0-300w.webp"
                alt="image"
                className="home-image1"
              />
              <input type="radio" name="radio" className="home-radiobutton1" />
            </div>
            <div className="home-card-container2">
              <img
                src="/template-0-300w.webp"
                alt="image"
                className="home-image2"
              />
              <input type="radio" name="radio" className="home-radiobutton2" />
            </div>
            <div className="home-card-container3">
              <img
                src="/template-0-300w.webp"
                alt="image"
                className="home-image3"
              />
              <input type="radio" name="radio" className="home-radiobutton3" />
            </div>
            <div className="home-card-container4">
              <img
                src="/template-0-300w.webp"
                alt="image"
                className="home-image4"
              />
              <input type="radio" name="radio" className="home-radiobutton4" />
            </div>
          </div>
        </div>
        <div className="home-step2">
          <div className="home-title-bar1">
            <button type="button" className="home-button1 button">
              Step 2
            </button>
            <span>Complete the vCard data entry</span>
          </div>
          <div className="home-form-container">
            <div className="home-container1"></div>
            <div className="home-container2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
