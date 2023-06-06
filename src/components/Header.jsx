import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  console.log(location.pathname);
  const renderBoton = () => {
    if (location.pathname === "/") {
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
