import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const PopUp = ({ children, redirect, display, button }) => {
  const navigate = useNavigate()
  const [state, setState] = useState(display);
  useEffect(() => {
    setState(display)
  }, [display]);

  const handleClick = () => {
    setState(false);
    navigate(redirect)
  
  };
  return (
    <div
      style={!state ? { display: "none" } : { display: "grid" }}
      className=" bg-victoria-transparent  w-screen h-screen place-content-center fixed top-0 left-0  "
    >
      <div className=" flex flex-col justify-around items-center p-5  sm:h-60  sm:w-96 left-auto text-xl bg-victoria-popup text-center rounded-2xl">
        <p>{children}</p>
        <div className=" text-center">
          <button
            className="bg-victoria-buttonPrimary rounded-full px-3 py-2 "
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
