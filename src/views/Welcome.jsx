import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

const Welcome = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: false, // Animar solo una vez cuando se hace visible
    threshold: 0.2, // Umbral de visibilidad para activar la animación (0 a 1)
  });
  return (
      <section ref={ref} className=" bg-victoria-body pt-44  min-h-screen">
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <span
                className="w-auto px-6 py-3 rounded-full bg-white/5  hover:cursor-pointer"
                onClick={() => navigate("/home")}
              >
                <span className="tewxt-sm font-medium text-victoria-buttonPrimary">
                  Explorá los perfiles
                </span>
              </span>
              <p className="mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl">
                ¡Bienvenido a nuestra plataforma
                <span className="md:block"> de reclutamiento en línea! </span>
              </p>
              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300">
                Regístrate, crea tu perfil y permite que los reclutadores te
                encuentren.
              </p>
            </div>
            <div className="flex flex-col justify-center max-w-sm gap-3 mx-auto mt-10 sm:flex-row">
              <button
                onClick={() => navigate("/signup")}
                className="text-white focus:outline-none inline-flex items-center justify-center rounded-xl bg-victoria-buttonPrimary  duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-victoria-buttonSecondary hover:border-white hover:text-white lg:w-auto px-6 py-3 text-center w-full"
              >
                Registrate gratis
              </button>
            </div>
          </div>
        </div>
      </section>
      

  );
};

export default Welcome;
