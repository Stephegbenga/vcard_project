import React, {useState, useEffect, useRef} from 'react'
import {Button, Modal} from "antd"
import { Helmet } from 'react-helmet'
import uuid from 'react-uuid';
import {create_card} from "../api"
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import {frontend_url} from "../constant"
import './editor.css'


const Editor = (props) => {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [qr_data, setQr_data] = useState("")
  const [show_qr, setShow_qr] = useState(false)

  const qrCodeRef = useRef(null);


  useEffect(() => {
    if(!form.name || form.name.trim() == ""){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  }, [form]);


  const HandleSubmit = async () => {
    setLoading(true)
    if(!form.id){
      let unique_id = uuid()
      form.id = unique_id
      setForm({...form, id: unique_id})
    }

    let response = await create_card(JSON.stringify(form))
    setLoading(false)
    if(response){
      console.log("this is respnse", response)
      let short_id = response.short_id
      setQr_data(`${frontend_url}/${short_id}`)
      setForm({})
      setShow_qr(true)
    }
  }


  const Close_Modal = () => {
    setShow_qr(false)
  }

  const Download_Qr = () => {
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current).then((canvas) => {
        // Convert the canvas to a data URL
        const dataUrl = canvas.toDataURL('image/png');
        // Trigger the download
        saveAs(dataUrl, 'qrcode.png');
      });
    }
  };





  return (
    <div className="editor-container">
      <Helmet>
        <title>Vcard Editor</title>
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
                src="/template-0-300w.webp"
                className="editor-image"
              />
              <input type="radio" name="radio" className="editor-radiobutton" />
            </div>
            <div className="editor-card-container1">
              <img
                alt="image"
                src="/template-1-300w.webp"
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
                src="/template-2-300w.webp"
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
                src="/template-3-300w.webp"
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
                src="/template-4-300w.webp"
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
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="editor-textinput input"
                  />
                </div>
                <div className="editor-right1">
                  <input
                    type="text"
                    value={form.company_name}
                    onChange={(e) => setForm({...form, company_name: e.target.value})}
                    placeholder="Company Name"
                    className="editor-textinput01 input"
                  />
                </div>
              </div>
              <div className="editor-row1">
                <div className="editor-left2">
                  <input
                    type="text"
                    value={form.website}
                    onChange={(e) => setForm({...form, website: e.target.value})}
                    placeholder="Your website (https://)"
                    className="editor-textinput02 input"
                  />
                </div>
                <div className="editor-right2">
                  <input
                    type="text"
                    value={form.position}
                    onChange={(e) => setForm({...form, position: e.target.value})}
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
                    value={form.phone_mobile}
                    onChange={(e) => setForm({...form, phone_mobile: e.target.value})}
                    placeholder="Phone (Mobile)"
                    className="editor-textinput04 input"
                  />
                  <input
                    type="text"
                    value={form.phone_work}
                    onChange={(e) => setForm({...form, phone_work: e.target.value})}
                    placeholder="Phone (Work)"
                    className="editor-textinput05 input"
                  />
                </div>
                <div className="editor-right4">
                  <input
                    type="text"
                    value={form.country}
                    onChange={(e) => setForm({...form, country: e.target.value})}
                    placeholder="Country"
                    className="editor-textinput06 input"
                  />
                  <input
                    type="text"
                    value={form.state}
                    onChange={(e) => setForm({...form, state: e.target.value})}
                    placeholder="State"
                    className="editor-textinput07 input"
                  />
                </div>
              </div>
              <div className="editor-row3">
                <div className="editor-left5">
                  <input
                    type="text"
                    value={form.phone_private}
                    onChange={(e) => setForm({...form, phone_private: e.target.value})}
                    placeholder="Phone (Private)"
                    className="editor-textinput08 input"
                  />
                  <input
                    type="text"
                    value={form.fax}
                    onChange={(e) => setForm({...form, fax: e.target.value})}
                    placeholder="Fax"
                    className="editor-textinput09 input"
                  />
                </div>
                <div className="editor-right5">
                  <input
                    type="text"
                    value={form.street}
                    onChange={(e) => setForm({...form, street: e.target.value})}
                    placeholder="Street"
                    className="editor-textinput10 input"
                  />
                </div>
              </div>
              <div className="editor-row4">
                <div className="editor-left6">
                  <input
                    type="text"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    placeholder="Your Email (username@email.com)"
                    className="editor-textinput11 input"
                  />
                </div>
                <div className="editor-right6">
                  <input
                    type="text"
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => setForm({...form, city: e.target.value})}
                    className="editor-textinput12 input"
                  />
                  <input
                    type="text"
                    value={form.zipcode}
                    onChange={(e) => setForm({...form, zipcode: e.target.value})}
                    placeholder="Zipcode"
                    className="editor-textinput13 input"
                  />
                </div>
              </div>

              <div className="editor-descriptionlabel">
                <div className="editor-left07">
                  <span>Personal Description</span>
                </div>
                <div className="editor-right07">
                  <span>Primary Photo</span>
                </div>
              </div>

              <div className="editor-descriptionandphoto">
                <div className="editor-left08">
                  <textarea
                     value={form.description}
                     onChange={(e) => setForm({...form, description: e.target.value})}
                    placeholder="placeholder"
                    className="editor-textarea textarea"
                  ></textarea>
                </div>

                <div className="editor-right08">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="editor-profile"
                  />
                  <div className="editor-btn-group">
                    <button type="button" className="editor-button2 button">
                      Upload
                    </button>
                    <button type="button" className="editor-button3 button">
                      Clear
                    </button>
                  </div>
                </div>
              </div>

              <div style={{marginTop: 25}}>
                <Button loading={loading} onClick={HandleSubmit} disabled={disabled} type="primary">Generate QR code</Button>
              </div>

            </div>
            {/* <div className="editor-vcardsample">
              <img
                alt="image"
                src="/phone_screen-200w.png"
                className="editor-image5"
              />
            </div> */}
          </div>
        </div>
      </div>
      
      <Modal width={400} open={show_qr} okText="Download QrCode" onOk={Download_Qr} onClose={Close_Modal} onCancel={Close_Modal} title="Dowmload or scan Qrcode"> 
      <div ref={qrCodeRef}>

        <QRCode style={{height: "100%", width: "100%"}} value={qr_data} viewBox={`0 0 256 256`} />
        </div>

      </Modal>
    </div>
  )
}

export default Editor
