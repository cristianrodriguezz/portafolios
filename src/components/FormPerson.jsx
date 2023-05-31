import { countries } from "../mocks/countries.json";
import { experiences } from "../mocks/experience.json";
import { modalities } from "../mocks/modalities.json";

const FormPerson = () => {
  

  return (
    <section className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl h-screen ">
      <div className="w-full max-w-md mx-auto md:max-w-sm  md:w-96  bg-victoria-bgCardPrimary p-10 rounded-lg shadow-pers ">
        <div className="flex flex-col ">
          <div>
            <h2 className="text-4xl text-victoria-textPrimary font-bold">
              Crear perfil
            </h2>
          </div>
        </div>
        <form>
          <div className="mt-4 space-y-6">
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="password"
              >
                Nombre
              </label>
              <input
                type="text"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="password"
              >
                Apellido
              </label>
              <input
                type="text"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="password"
              >
                Rol
              </label>
              <select
                name=""
                id=""
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="password"
              >
                País
              </label>
              <select
                name=""
                id=""
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="password"
              >
                Modalidad
              </label>
              <select
                name=""
                id=""
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                {
                  modalities.map(modality =>(
                    <option key={modality} value={modality}>{modality}</option>
                  ))
                }
              </select>
            </div>

            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="password"
              >
                Experiencia
              </label>
              <select
                name=""
                id=""
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                {experiences.map((experience) => (
                  <option key={experience.name} value={experience.name}>
                    {experience.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-full">
              <button
                className="items-center justify-center w-full px-6 py-2.5 text-center text-victoria-textPrimary bg-victoria-buttonPrimary border-2 rounded-full nline-flex hover:bg-victoria-buttonSecondary hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                type="submit"
              >
                Crear
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormPerson;
