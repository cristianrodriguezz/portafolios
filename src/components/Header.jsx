import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AvatarDropDown from "./AvatarDropDown";
import logo from '../assets/connect--impact.png' 

const Header = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  let location = useLocation();
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );
  const [urlAvatar, setUrlAvatar] = useState();

  useEffect(() => {
    if (user) {
      fetch(`${URL}/auth/repositorie/${user.user._id}`)
        .then((res) => res.json())
        .then((data) => {
          setUrlAvatar(data.data[0].photo);
        });
    }
  }, [user]);

  const handleClickSignOut = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("url");
    setUrlAvatar(null);
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, [location.pathname]);

  const renderBoton = () => {
    if (user) {
      return (
        <div className="flex">
          <div className="w-10 h-10 m-auto image-container">
            {!urlAvatar ? (
              <AvatarDropDown signOut={handleClickSignOut} urlAvatar="https://res.cloudinary.com/dwy6oevco/image/upload/v1685696529/Images/adalczr51wmgdl1sshkz.png"/>
            ) : (
              <AvatarDropDown urlAvatar={urlAvatar} name={user.user.name} lastName={user.user.lastName} email={user.user.email} signOut={handleClickSignOut}/>
            )}
          </div>
        </div>
      );
    } else if (location.pathname === "/home" || location.pathname === "/") {
      return (
        <nav className="flex items-center justify-center none list-none sm:gap-5">
          <Link
            className="pt-2 pb-2 pl-3 pr-3 text-xs sm:text-base  text-white font-bold grid place-items-center cursor-pointer"
            to={"/signin"}
          >
            Iniciar sesión
          </Link>
          <Link to={"/signup"}>
            <li className="pt-2 pb-2 pl-3 pr-3 text-xs sm:text-base rounded-lg text-white font-bold shadow-pers bg-victoria-buttonPrimary grid place-items-center cursor-pointer">
              Crear usuario
            </li>
          </Link>
        </nav>
      );
    } else if (location.pathname === "/signin") {
      return (
        <Link to={"/signup"} className="flex justify-center items-center">
          <li className="pt-2 pb-2 pl-3 pr-3 rounded-lg text-white font-bold shadow-pers bg-victoria-buttonPrimary grid place-items-center cursor-pointer">
            Crear usuario
          </li>
        </Link>
      );
    } else if (location.pathname === "/signup") {
      return (
        <Link
          className="pt-2 pb-2 pl-3 pr-3 text-white font-bold grid place-items-center cursor-pointer"
          to={"/signin"}
        >
          Iniciar sesión
        </Link>
      );
    } else if (!user) {
      <Link
        to={"/"}
        className="pt-2 pb-2 pl-3 pr-3 rounded-lg text-white font-bold shadow-pers  grid place-items-center cursor-pointer"
      >
        
        <img src={logo} alt="logo" /><span className="flex items-end justify-end text-victoria-buttonPrimary font-bold">BETA</span>
      </Link>;
    }
  };

  return (
    <header className="bg-victoria-heading 2xl:px-72 xl:px-64 lg:px-20 md:px-10 px-1 py-4 z-20 fixed w-full top-0 flex justify-between  border-b border-victoria-bgCardPrimary">
      <Link
        to={"/"}
        className="w-24 cursor-pointer flex"
      >
        <img src={logo} alt="logo" /><span className="flex items-end justify-end text-victoria-buttonPrimary font-bold  text-xs">BETA</span>
      </Link>
      {renderBoton()}
    </header>
  );
};

export default Header;
