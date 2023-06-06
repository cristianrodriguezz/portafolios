import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const PopUp = ({ children, redirect, display, button }) => {
  const navigate = useNavigate()
  const [state, setState] = useState(display);
  useEffect(() => {
    setState(display)
  }, [display]);

  const handleClick = () => {
    setState(!state);
    navigate(redirect)
  };
  return (
    <div
      style={!state ? { display: "none" } : { display: "grid" }}
      className=" bg-victoria-transparent w-screen h-screen place-content-center fixed top-0 left-0 "
    >
      <div className="p-7 m-10 left-auto bg-gray-950 rounded-2xl">
        {children}
        <div className="mt-7 text-center">
          <button
            className="bg-victoria-buttonPrimary rounded-full px-2 py-1 "
            onClick={handleClick}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
