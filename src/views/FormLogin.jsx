import { useContext, useState } from "react";
import PopUp from "../components/PopUp";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { UserFavContext } from "../context/userFav";

const FormLogin = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [createOk, setCreateOk] = useState(false);
  const {setUser} = useContext(UserFavContext)

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.target);
      const body = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      const response = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setError("Credenciales inválidas");
        setTimeout(() => {
          setError("");
        }, 2000);
        throw new Error(response);
      }
      if (response.ok) {
        window.localStorage.setItem("user", JSON.stringify(data.data));
        setUser(data.data)
        setCreateOk(true);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mx-2 mb-96  h-full lg:mx-28 xl:mx-72 gap-8 my-10 sm:mx-9 ">
      <div className=" w-96  pb-5  mb-14 bg-victoria-bgCardPrimary px-1 sm:px-10 sm:pb-5 rounded-lg shadow-pers ">
        <h2 className="text-4xl text-center m-3  text-victoria-textPrimary font-bold">
          Iniciar sesión
        </h2>
        <form onSubmit={handleSubmitLogin}>
          <div className="text-red-600 text-center">{error}</div>
          <label htmlFor="email">Email:</label>
          <input
            className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
            type="email"
            name="email"
            id="email"
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className="border mb-6 bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
            type="password"
            name="password"
            id="password"
          ></input>

          <button className="items-center mt-4 justify-center flex w-full px-6 h-12 font-bold text-lg text-center text-victoria-textPrimary bg-victoria-buttonPrimary  rounded-full  hover:bg-victoria-buttonSecondary hover:border-victoria-buttonSecondary hover:text-black focus:outline-none focus-visible:outline-black  focus-visible:ring-black">
            {loading ? <Loader /> : "Iniciar sesión"}
          </button>
          <p className="text-center py-3">
            ¿No estás registrado?{" "}
            <Link className="text-blue-400  hover:text-gray-500" to={"/signup"}>
              Entra aquí
            </Link>
          </p>
          <p className="text-center">
            Al hacer clic en el botón iniciar sesión, acepta nuestros{" "}
            <Link
              className="text-blue-500 hover:text-gray-500"
              to={"/terminos"}
            >
              Términos y Condiciones
            </Link>
          </p>
        </form>
      </div>
      <PopUp redirect={"/home"} display={createOk} button={"Aceptar"}>
        Inicio de sesión con éxito
      </PopUp>
    </div>
  );
};

export default FormLogin;
