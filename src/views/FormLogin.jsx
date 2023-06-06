import { useState } from "react";
import PopUp from "../components/PopUp";

const FormLogin = () => {

  const URL = import.meta.env.VITE_BACKEND_URL;

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const [createOk, setCreateOk] = useState(false)


  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const formData = new FormData(e.target)
      const body = {
        email: formData.get('email'),
        password: formData.get('password'),
      };
      const response = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json()
      if(response.ok){
        setCreateOk(true)
      }
      console.log(data)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="flex mx-2 mb-96  h-full lg:mx-28 xl:mx-72 gap-8 my-10 sm:mx-9 ">
      <div className="w-full pb-5 mb-14 bg-victoria-bgCardPrimary px-1 sm:px-10 sm:pb-5 rounded-lg shadow-pers ">
        <h2 className="text-4xl text-center m-3  text-victoria-textPrimary font-bold">
          Iniciar sesión
        </h2>
        <form onSubmit={handleSubmitLogin}>
          <label
            className="block mb-3 text-sm font-medium text-victoria-textPrimary"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
            type="email"
            name="email"
            id="email"
          ></input>
          <label
            className="block mb-3 text-sm font-medium text-victoria-textPrimary"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="border mb-6 bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
            type="password"
            name="password"
            id="password"
          ></input>
          <button className="items-center justify-center w-full px-6 py-2.5 text-center text-victoria-textPrimary bg-victoria-buttonPrimary  rounded-full  hover:bg-victoria-buttonSecondary hover:border-victoria-buttonSecondary hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">
            {loading ? 'Cargando...' : "Iniciar"}
          </button>
        </form>
      </div>
      <PopUp redirect={"/#"} display={createOk} button={'Aceptar'}>Inicio de sesión con éxito</PopUp>
    </div>
  );
};

export default FormLogin;
