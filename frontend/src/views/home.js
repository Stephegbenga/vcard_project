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
                alt="image"
                src="/template-0-300w.webp"
                className="home-image"
              />
              <input type="radio" name="radio" className="home-radiobutton" />
            </div>
            <div className="home-card-container1">
              <img
                alt="image"
                src="/template-1-300w.webp"
                className="home-image1"
              />
              <input type="radio" name="radio" className="home-radiobutton1" />
            </div>
            <div className="home-card-container2">
              <img
                alt="image"
                src="/template-2-300w.webp"
                className="home-image2"
              />
              <input type="radio" name="radio" className="home-radiobutton2" />
            </div>
            <div className="home-card-container3">
              <img
                alt="image"
                src="/template-3-300w.webp"
                className="home-image3"
              />
              <input type="radio" name="radio" className="home-radiobutton3" />
            </div>
            <div className="home-card-container4">
              <img
                alt="image"
                src="/template-4-300w.webp"
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
            <div className="home-form">
              <div className="home-label1">
                <div className="home-left">
                  <span>Your Name</span>
                </div>
                <div className="home-right">
                  <span>Company</span>
                </div>
              </div>
              <div className="home-row">
                <div className="home-left1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="home-textinput input"
                  />
                </div>
                <div className="home-right1">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="home-textinput01 input"
                  />
                </div>
              </div>
              <div className="home-row1">
                <div className="home-left2">
                  <input
                    type="text"
                    placeholder="Your website (https://)"
                    className="home-textinput02 input"
                  />
                </div>
                <div className="home-right2">
                  <input
                    type="text"
                    placeholder="Position"
                    className="home-textinput03 input"
                  />
                </div>
              </div>
              <div className="home-label2">
                <div className="home-left3">
                  <span>Contacts</span>
                </div>
                <div className="home-right3">
                  <span>Address</span>
                </div>
              </div>
              <div className="home-row2">
                <div className="home-left4">
                  <input
                    type="text"
                    placeholder="Phone (Mobile)"
                    className="home-textinput04 input"
                  />
                  <input
                    type="text"
                    placeholder="Phone (Work)"
                    className="home-textinput05 input"
                  />
                </div>
                <div className="home-right4">
                  <input
                    type="text"
                    placeholder="Country"
                    className="home-textinput06 input"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="home-textinput07 input"
                  />
                </div>
              </div>
              <div className="home-row3">
                <div className="home-left5">
                  <input
                    type="text"
                    placeholder="Phone (Private)"
                    className="home-textinput08 input"
                  />
                  <input
                    type="text"
                    placeholder="Fax"
                    className="home-textinput09 input"
                  />
                </div>
                <div className="home-right5">
                  <input
                    type="text"
                    placeholder="Street"
                    className="home-textinput10 input"
                  />
                </div>
              </div>
              <div className="home-row4">
                <div className="home-left6">
                  <input
                    type="text"
                    placeholder="Your Email (username@email.com)"
                    className="home-textinput11 input"
                  />
                </div>
                <div className="home-right6">
                  <input
                    type="text"
                    placeholder="City"
                    className="home-textinput12 input"
                  />
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="home-textinput13 input"
                  />
                </div>
              </div>
            </div>
            <div className="home-vcardsample">
              <img
                src="/phone_screen-200w.png"
                alt="image"
                className="home-image5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
