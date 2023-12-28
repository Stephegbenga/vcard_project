import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import QRCode from "react-qr-code";
import "./vcards.css";
import {get_cards, create_card} from "../api";
import {frontend_url} from "../constant"

const Vcards = (props) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      setLoading(true);
      let result = await get_cards();
      if (result) {
        console.log(result)
        setCards(result.data);
      }
      setLoading(false);
    };
    onLoad();
  }, []);


  return (
    <div className="vcards-container">
      <Helmet>
        <title>vcards - Brogan clothing</title>
        <meta property="og:title" content="vcards - Brogan clothing" />
      </Helmet>
      <div className="vcards-title-bar">
        <h3 className="vcards-text">vCard</h3>

      </div>


      {cards.map((card) => (
        <div key={card.id} className="vcards-vcard">
          <div className="vcards-qrcode-container">
            {/* <img alt="image" src="/4cl4-200h.png" className="vcards-image" /> */}
            <QRCode size={256} style={{height: "auto", maxWidth: "100%", width: "100%"}} value={`${frontend_url}/${card.short_id}`} viewBox={`0 0 256 256`} />
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
              <span className="vcards-text1">{card.scans} scans</span>
            </div>
            <div className="vcards-link">
              <svg viewBox="0 0 1024 1024" className="vcards-icon2">
                <path d="M726 298q88 0 150 63t62 151-62 151-150 63h-172v-82h172q54 0 93-39t39-93-39-93-93-39h-172v-82h172zM342 554v-84h340v84h-340zM166 512q0 54 39 93t93 39h172v82h-172q-88 0-150-63t-62-151 62-151 150-63h172v82h-172q-54 0-93 39t-39 93z"></path>
              </svg>
              <span className="vcards-text2">{frontend_url}/{card.short_id}</span>
            </div>
            <div className="vcards-created">
              <span className="vcards-text3">Created:</span>
              <span className="vcards-text4">{card.created_at}</span>
            </div>
            <div className="vcards-downloadbar">
              <button type="button" className="vcards-button4 button">
                Download 
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vcards;
