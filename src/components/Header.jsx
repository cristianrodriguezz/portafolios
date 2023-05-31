

const Header = () => {
  return (
    <header className="p-2 bg-victoria-heading w-full flex justify-between sm:p-3 sm:pl-5 sm:pr-5 border-b border-victoria-bgCardPrimary">
      <div className="w-10 h-auto">
        <img src="https://cdn-icons-png.flaticon.com/128/23/23303.png" alt="LOGO" />
      </div>
      <nav className="flex none list-none gap-5">
        <li className="pt-2 pb-2 pl-3 pr-3 text-white font-bold grid place-items-center cursor-pointer">
          Iniciar sesión
        </li>
        <li className="pt-2 pb-2 pl-3 pr-3 rounded-lg text-white font-bold shadow-pers bg-victoria-buttonPrimary grid place-items-center cursor-pointer">
          Registrarse
        </li>
      </nav>
    </header>
  );
};

export default Header;
