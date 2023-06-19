import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAddToFavorite = () => {
  const navigate = useNavigate();
  const [newFav,setNewFav] = useState()
  const URL = import.meta.env.VITE_BACKEND_URL;
  const user = JSON.parse(window.localStorage.getItem("user"));
  const id = user?.user?._id;


  const addFav = async (favorites) => {
    const apiUrl = `${URL}/auth/fav/${id}`;
    if (!user) return navigate("/signin");
    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorites }),
      });
      const data = await response;
      setNewFav(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFav = async (favorites) => {
    const apiUrl = `${URL}/auth/fav/${id}`;
    try {
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorites }),
      });
      const data = await response;
      setNewFav(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { addFav, newFav, deleteFav };
};
