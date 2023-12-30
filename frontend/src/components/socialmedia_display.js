import "./socialmedia_display.css"

const Socialmedia_display = ({socialmedias}) => {
    const all_social_medias= [{name: "facebook", icon: "/icons8-facebook-48-200h.png"}, {name: "whatsapp", icon: "/icons8-whatsapp-48-200h.png"}, 
{name: "instagram", icon: "icons8-ig-48-200h.png"}, {name: "youtube", icon: "/icons8-youtube-96-200h.png"}, 
 {name: "linkedin", icon: "/icons8-linkedin-48-200h.png"}, {name: "telegram", icon: "/icons8-telegram-96-200h.png"}, {name: "pinterest", icon: "/icons8-pinterest-48-200h.png"},  {name: "uber_eats", icon: "/icons8-uber-eats-96-200h.png"},
 {name: "glovo", icon: "/glovo-200h.png"}, {name: "shopify", icon: "/icons8-shopify-96-200h.png"}, {name: "amazon", icon: "/icons8-amazon-64-200h.png"},
 {name: "messenger", icon: "/messenger-outline-svgrepo-com.svg"}, {name: "snapchat", icon: "/icons8-snapchat-48-200h.png"}, {name: "just_eats", icon: "/icons8-justeat-96-200h.png"}]


 const get_socialmedia_icon = (name) => {
    const socialmedia = all_social_medias.find((media) => media.name === name);
    if(socialmedia){
        return socialmedia.icon
    }else{
        return ""
    }
 }

    return (
      <div className="template2-socialmedia">
        <div className="template2-container15">
          <div className="template2-container16">
            <span className="template2-text30">
              <span>Social Media</span>
              <br></br>
            </span>
            <div className="template2-links">

                {socialmedias && socialmedias.map((socialmedia) => {
                    return (
                        <a href={socialmedia.value} target="_blank" rel="noreferrer noopener" className="atag_socialmedia-link">
                        <img alt="image" src={get_socialmedia_icon(socialmedia.name)} className="atag_socialmedia-icon" />
                      </a>
        
                    )
                })}

        
            </div>
          </div>
        </div>
      </div>
    );
}


export default Socialmedia_display