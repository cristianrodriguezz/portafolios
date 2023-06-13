import { Formik } from "formik";
import Loader from "../components/Loader";
import { useState } from "react";
import PopUp from "../components/PopUp";
import { Link } from "react-router-dom";

const Register = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const [errorBackend, setErrorBackend] = useState("");
  const [createOk, setCreateOk] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Requerido.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email inválido.";
          }
          if (!values.name) {
            errors.name = "Requerido.";
          } else if (values.name.length > 20) {
            errors.name = "No puede contener más de 20 caracteres";
          }
          if (!values.password) {
            errors.password = "Requerido";
          } else if (values.password.length > 20) {
            errors.password = "No puede contener más de 20 caracteres";
          } else if (values.password.length < 5) {
            errors.password = "Más de 5 caracteres";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const body = {
              email: values.email,
              name: values.name,
              password: values.password,
            };
            const response = await fetch(`${URL}/auth/register`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            });

            const data = await response.json();
            if (response.ok) {
              setCreateOk(true);
            }
            if (!response.ok) {
              setErrorBackend(data.error);
              setTimeout(() => {
                setErrorBackend("");
              }, 2000);
              throw new Error(data.error);
            }
            console.log(data);
          } catch (e) {
            setSubmitting(false);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="flex items-center justify-center  mx-2 mb-96  h-full lg:mx-28 xl:mx-72 gap-8 my-10 sm:mx-9 ">
            <div className=" w-96 pb-5 mb-14 bg-victoria-bgCardPrimary px-1 sm:px-10 sm:pb-5 rounded-lg shadow-pers ">
              <h2 className="text-4xl text-center m-3  text-victoria-textPrimary font-bold">
                Crear usuario
              </h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <div className="text-red-600">
                  {errors.name && touched.name && errors.name}
                </div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div className="text-red-600">
                  {errors.email && touched.email && errors.email}
                </div>
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
                  value={values.password}
                />
                <div className="text-red-600">
                  {errors.password && touched.password && errors.password}
                </div>
                <div className="text-red-600 text-center">
                  {errorBackend && errorBackend}
                </div>
                <button
                  className="items-center mt-4 justify-center flex w-full px-6 h-12 font-bold text-lg text-center text-victoria-textPrimary bg-victoria-buttonPrimary  rounded-full  hover:bg-victoria-buttonSecondary hover:border-victoria-buttonSecondary hover:text-black focus:outline-none focus-visible:outline-black  focus-visible:ring-black"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {!isSubmitting ? "Registrarse" : <Loader />}
                </button>
              </form>
              <p className="text-center py-3">
                ¿Ya tienes una cuenta?{" "}
                <Link className="text-blue-400 hover:text-gray-500" to={"/signin"}>
                  Entra aquí
                </Link>
              </p>
              <p className="text-center">
                Al hacer clic en el botón registrarse, acepta nuestros{" "}
                <Link
                  className="text-blue-500 hover:text-gray-500"
                  to={"/terminos"}
                >
                  Términos y Condiciones
                </Link>
              </p>
            </div>
            <PopUp redirect={"/signin"} display={createOk} button={"Aceptar"}>
              Te registraste con éxito
            </PopUp>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
