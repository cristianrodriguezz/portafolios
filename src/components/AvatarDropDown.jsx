import { useState } from "react";
import { Link } from "react-router-dom";

const AvatarDropDown = ({ urlAvatar, signOut, name, lastName, email }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <div className="text-base font-medium ">
      <label htmlFor="us" className="userAvatar">
        <img
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-10 h-10 rounded-full cursor-pointer  object-cover "
          src={urlAvatar}
          alt="User dropdown"
        ></img>
      </label>
      <input
        type="checkbox"
        hidden
        defaultChecked={true}
        id="us"
        className="checkUserDropDown"
      />
  
      <div
        id="userDropdown"
        className="bg-white divide-y z-50 absolute top-[4.5rem] xl:right-34 xl:right-72 lg:right-20 md:right-10 sm:right-5 right-5  border-gray-600 border-2  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>
            {name} {lastName}
          </div>
          <div

            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className=" cursor-pointer truncate text-gray-500 ">{email}</div>
            {showTooltip && (
              <div className="absolute right-1 top-9  bg-black text-white  text-xs">
                {email}
              </div>
            )}
          </div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="/create"
              className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Configuración
            </a>
          </li>
          <li>
            <Link
              to="/favorites"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Favoritos
            </Link>
          </li>
        </ul>
        <div className="py-1">
          <button
            onClick={signOut}
            className="block px-4 py-2 w-full text-left rounded-bl-md rounded-br-md text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarDropDown;
