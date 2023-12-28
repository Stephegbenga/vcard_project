import React from 'react'

import { Helmet } from 'react-helmet'

import './vcards.css'

const Vcards = (props) => {
  return (
    <div className="vcards-container">
      <Helmet>
        <title>vcards - Brogan clothing</title>
        <meta property="og:title" content="vcards - Brogan clothing" />
      </Helmet>
      <div className="vcards-title-bar">
        <h3 className="vcards-text">vCard</h3>
      </div>
      <div className="vcards-vcard">
        <div className="vcards-qrcode-container">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="vcards-image"
          />
        </div>
        <div className="vcards-vcard-detail">
          <span className="vcards-title">Campaign XUUX</span>
          <div className="vcards-btn-groups">
            <button type="button" className="vcards-button button">
              Rename
            </button>
            <button type="button" className="vcards-button1 button">
              Delete
            </button>
            <button type="button" className="vcards-button2 button">
              Share
            </button>
            <button type="button" className="vcards-button3 button">
              Edit
            </button>
          </div>
          <div className="vcards-stats">
            <svg viewBox="0 0 1024 1024" className="vcards-icon">
              <path d="M0 832h1024v128h-1024zM128 576h128v192h-128zM320 320h128v448h-128zM512 512h128v256h-128zM704 128h128v640h-128z"></path>
            </svg>
            <span className="vcards-text1">0 scans</span>
          </div>
          <div className="vcards-link">
            <svg viewBox="0 0 1024 1024" className="vcards-icon2">
              <path d="M726 298q88 0 150 63t62 151-62 151-150 63h-172v-82h172q54 0 93-39t39-93-39-93-93-39h-172v-82h172zM342 554v-84h340v84h-340zM166 512q0 54 39 93t93 39h172v82h-172q-88 0-150-63t-62-151 62-151 150-63h172v82h-172q-54 0-93 39t-39 93z"></path>
            </svg>
            <span className="vcards-text2">https://skksksks.skks/ejje</span>
          </div>
          <div className="vcards-created">
            <span className="vcards-text3">Created:</span>
            <span className="vcards-text4">https://skksksks.skks/ejje</span>
          </div>
          <div className="vcards-downloadbar">
            <button type="button" className="vcards-button4 button">
              Download 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vcards
