import { createContext, useEffect, useState } from "react";

export const UserFavContext = createContext();
const URL = import.meta.env.VITE_BACKEND_URL;

export const UserFavProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);
  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem("user")));
  const id = user?.user?._id


  const getFavorite = async () => {
    const apiUrl = `${URL}/auth/repositorie/${id}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setFavs(data.data[0].favorites));
  };

  useEffect(() => {
    if (!user) return setFavs([]);
    getFavorite()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favs.length, user]);


  return (
    <UserFavContext.Provider value={{ favs, setFavs, setUser }}>
      {children}
    </UserFavContext.Provider>
  );
};
