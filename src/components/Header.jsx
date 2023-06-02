import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-2 bg-victoria-heading w-full flex justify-between sm:p-3 sm:pl-5 sm:pr-5 border-b border-victoria-bgCardPrimary">
      <Link to={'/'} className="pt-2 pb-2 pl-3 pr-3 rounded-lg text-white font-bold shadow-pers bg-victoria-buttonPrimary grid place-items-center cursor-pointer">
        INICIO
      </Link>
      <nav className="flex none list-none gap-5">
        {/* <li className="pt-2 pb-2 pl-3 pr-3 text-white font-bold grid place-items-center cursor-pointer">
          Iniciar sesión
        </li> */}
        <Link to={"/register"}>
          <li className="pt-2 pb-2 pl-3 pr-3 rounded-lg text-white font-bold shadow-pers bg-victoria-buttonPrimary grid place-items-center cursor-pointer">
            Crear perfil
          </li>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
