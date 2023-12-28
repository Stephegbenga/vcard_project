import {message as toast} from "antd"
import {base_url} from "./constant"

const get_cards = async () => {
    try {
      const response = await fetch(base_url + "/cards", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.message;
        toast.error(errorMessage);
        return null;
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };


  
const get_card = async (id) => {
  try {
    const response = await fetch(base_url + `/card/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message;
      toast.error(errorMessage);
      return null;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    toast.error(error.message);
    return null;
  }
};




const create_card = async (data) => {
    try {
      const response = await fetch(base_url + "/card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: data,
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.message;
        toast.error(errorMessage);
        return null;
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };




export {get_cards, create_card, get_card}
