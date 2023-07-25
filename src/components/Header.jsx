import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AvatarDropDown from "./AvatarDropDown";

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
          <div className="w-10 h-10 m-auto image-container md:mr-32">
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
        <nav className="flex none list-none gap-5">
          <Link
            className="pt-2 pb-2 pl-3 pr-3 text-white font-bold grid place-items-center cursor-pointer"
            to={"/signin"}
          >
            Iniciar sesión
          </Link>
          <Link to={"/signup"}>
            <li className="pt-2 pb-2 pl-3 pr-3 rounded-lg text-white font-bold shadow-pers bg-victoria-buttonPrimary grid place-items-center cursor-pointer">
              Crear usuario
            </li>
          </Link>
        </nav>
      );
    } else if (location.pathname === "/signin") {
      return (
        <Link to={"/signup"}>
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
        className="pt-2 pb-2 pl-3 pr-3 rounded-lg text-white font-bold shadow-pers bg-victoria-buttonPrimary grid place-items-center cursor-pointer"
      >
        INICIO
      </Link>;
    }
  };

  return (
    <header className="p-2 bg-victoria-heading w-full flex justify-between sm:p-3 sm:pl-5 sm:pr-5 border-b border-victoria-bgCardPrimary">
      <Link
        to={"/"}
        className="pt-2 pb-2 pl-3 pr-3 rounded-lg text-white font-bold shadow-pers bg-victoria-buttonPrimary grid place-items-center cursor-pointer"
      >
        INICIO
      </Link>
      {renderBoton()}
    </header>
  );
};

export default Header;
