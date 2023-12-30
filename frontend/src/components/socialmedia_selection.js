import {useState, useEffect} from "react"
import { Tooltip, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Socialmedia_section = ({onChange}) => {
    const all_social_medias= [{name: "facebook", icon: "/facebook-176-svgrepo-com.svg"}, {name: "whatsapp", icon: "/whatsapp-128-svgrepo-com.svg"}, 
    {name: "instagram", icon: "/instagram-167-svgrepo-com.svg"}, {name: "youtube", icon: "/youtube-168-svgrepo-com.svg"}, 
     {name: "linkedin", icon: "/linkedin-svgrepo-com.svg"}, {name: "telegram", icon: "/telegram-svgrepo-com.svg"}, {name: "pinterest", icon: "/pinterest-svgrepo-com.svg"},  {name: "uber_eats", icon: "icons8-uber-eats-app.svg"},
     {name: "glovo", icon: "/glovo-svgrepo-com.svg"}, {name: "shopify", icon: "/shopify-svgrepo-com.svg"}, {name: "amazon", icon: "/amazon-svgrepo-com.svg"},
     {name: "messenger", icon: "/messenger-outline-svgrepo-com.svg"}, {name: "snapchat", icon: "/snapchat-svgrepo-com.svg"}, {name: "just_eats", icon: "/just-eat-svgrepo-com_black.svg"}]

     const [selected_medias, setSelected_medias] = useState([]);
     const [availableMedia, setAvailableMedia] = useState(all_social_medias)

     const Handle_Add = (name) => {
      const mediaToAdd = all_social_medias.find((media) => media.name === name);
  
      if (mediaToAdd) {
        setSelected_medias([...selected_medias, mediaToAdd]);
        setAvailableMedia(availableMedia.filter((media) => media.name !== name));
      }

      console.log(selected_medias)
    };


    const Handle_Remove = (name) => {
      const mediaToRemove = selected_medias.find((media) => media.name === name);
  
      if (mediaToRemove) {
        setAvailableMedia([...availableMedia, mediaToRemove]);
        setSelected_medias(selected_medias.filter((media) => media.name !== name));
      }
    };



    const Handle_Socialmedia_Input = (name, value) => {
      const updatedSelectedMedias = selected_medias.map((media) =>
        media.name === name ? { ...media, value } : media
      );

    setSelected_medias(updatedSelectedMedias);
    }



    useEffect(() => {
      if(onChange){
        onChange(selected_medias)
      }
    }, [selected_medias]);
  
         

    return (
      <>
        <div className="editor-socialmediaselection">
          <div className="editor-addsocialmedialabel">
            <span>Add Social Media Links</span>
          </div>
        </div>

        <div className="editor-socialmediaicons">
          <div className="editor-iconscontainer">
            <svg viewBox="0 0 1024 1024" className="editor-leftmove">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <div className="editor-icons">
              {availableMedia.map((social_media, index) => {
                return (
                  <Tooltip placement="bottom" title={social_media.name.replace("_", " ")}>

                  <div key={index} className="editor-socialmedia_button" onClick={() => Handle_Add(social_media.name)}>
                    <img alt="image" src={social_media.icon} className="editor-socialmedia_icon" />
                  </div>

                  </Tooltip>

                );
              })}
            </div>
            <svg viewBox="0 0 1024 1024" className="editor-rightmove">
              <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
            </svg>
          </div>
        </div>

        <div className="editor-socialmediainputs">
          {selected_medias && selected_medias.map((social_media, index) => {
            return (
              <div key={index} className="editor-socialmediabox">
                <span className="editor-socialmediatitlelabel">{social_media.name} link</span>

                <Input addonAfter={<DeleteOutlined onClick={() => Handle_Remove(social_media.name)} style={{cursor: "pointer"}} />} onChange={(e) => Handle_Socialmedia_Input(social_media.name, e.target.value)} type="text" placeholder={`Enter your ${social_media.name} link`}  />
              </div>
            );
          })}
        </div>
      </>
    );
}


export default Socialmedia_section