import Template1 from "../components/template1";
import {get_card} from "../api"
import {useEffect, useState} from "react"



const Profile = (props) => {
    const {short_id} = props.match.params;
    const [loading, setLoading] = useState(false)
    const [card, setCard] = useState({})

    useEffect(() => {
        const onLoad = async () => {
          setLoading(true);
          let result = await get_card(short_id);
          if (result) {
            setCard(result);
          }
          setLoading(false);
        };
        onLoad();
      }, []);

    

    console.log("this is the short id", short_id)

    return <>
        <Template1 card={card} />
    </>
}


export default Profile
