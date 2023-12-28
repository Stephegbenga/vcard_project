import React from 'react'

import { Helmet } from 'react-helmet'

import './editor.css'

const Editor = (props) => {
  return (
    <div className="editor-container">
      <Helmet>
        <title>Brogan clothing</title>
        <meta property="og:title" content="Brogan clothing" />
      </Helmet>
      <div className="editor-vcard-container">
        <div className="editor-step1">
          <div className="editor-title-bar">
            <button type="button" className="editor-button button">
              Step 1
            </button>
            <span>Choose a template</span>
          </div>
          <div className="editor-card-types">
            <div className="editor-card-container">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="editor-image"
              />
              <input type="radio" name="radio" className="editor-radiobutton" />
            </div>
            <div className="editor-card-container1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="editor-image1"
              />
              <input
                type="radio"
                name="radio"
                className="editor-radiobutton1"
              />
            </div>
            <div className="editor-card-container2">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="editor-image2"
              />
              <input
                type="radio"
                name="radio"
                className="editor-radiobutton2"
              />
            </div>
            <div className="editor-card-container3">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="editor-image3"
              />
              <input
                type="radio"
                name="radio"
                className="editor-radiobutton3"
              />
            </div>
            <div className="editor-card-container4">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="editor-image4"
              />
              <input
                type="radio"
                name="radio"
                className="editor-radiobutton4"
              />
            </div>
          </div>
        </div>
        <div className="editor-step2">
          <div className="editor-title-bar1">
            <button type="button" className="editor-button1 button">
              Step 2
            </button>
            <span>Complete the vCard data entry</span>
          </div>
          <div className="editor-form-container">
            <div className="editor-form">
              <div className="editor-label">
                <div className="editor-left">
                  <span>Your Name</span>
                </div>
                <div className="editor-right">
                  <span>Company</span>
                </div>
              </div>
              <div className="editor-row">
                <div className="editor-left1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="editor-textinput input"
                  />
                </div>
                <div className="editor-right1">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="editor-textinput01 input"
                  />
                </div>
              </div>
              <div className="editor-row1">
                <div className="editor-left2">
                  <input
                    type="text"
                    placeholder="Your website (https://)"
                    className="editor-textinput02 input"
                  />
                </div>
                <div className="editor-right2">
                  <input
                    type="text"
                    placeholder="Position"
                    className="editor-textinput03 input"
                  />
                </div>
              </div>
              <div className="editor-label2">
                <div className="editor-left3">
                  <span>Contacts</span>
                </div>
                <div className="editor-right3">
                  <span>Address</span>
                </div>
              </div>
              <div className="editor-row2">
                <div className="editor-left4">
                  <input
                    type="text"
                    placeholder="Phone (Mobile)"
                    className="editor-textinput04 input"
                  />
                  <input
                    type="text"
                    placeholder="Phone (Work)"
                    className="editor-textinput05 input"
                  />
                </div>
                <div className="editor-right4">
                  <input
                    type="text"
                    placeholder="Country"
                    className="editor-textinput06 input"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="editor-textinput07 input"
                  />
                </div>
              </div>
              <div className="editor-row3">
                <div className="editor-left5">
                  <input
                    type="text"
                    placeholder="Phone (Private)"
                    className="editor-textinput08 input"
                  />
                  <input
                    type="text"
                    placeholder="Fax"
                    className="editor-textinput09 input"
                  />
                </div>
                <div className="editor-right5">
                  <input
                    type="text"
                    placeholder="Street"
                    className="editor-textinput10 input"
                  />
                </div>
              </div>
              <div className="editor-row4">
                <div className="editor-left6">
                  <input
                    type="text"
                    placeholder="Your Email (username@email.com)"
                    className="editor-textinput11 input"
                  />
                </div>
                <div className="editor-right6">
                  <input
                    type="text"
                    placeholder="City"
                    className="editor-textinput12 input"
                  />
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="editor-textinput13 input"
                  />
                </div>
              </div>
            </div>
            <div className="editor-vcardsample">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="editor-image5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
