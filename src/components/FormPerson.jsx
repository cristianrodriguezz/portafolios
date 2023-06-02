import { useEffect, useState } from "react";
import { submitImage } from "../hooks/submitImage";
import { countries } from "../mocks/countries.json";
import { experiences } from "../mocks/experience.json";
import { modalities } from "../mocks/modalities.json";
import { roles } from "../mocks/roles.json";
import Avatar from "./Avatar";
import { Person } from "./ListPersons";
import { stuffedCard } from "../hooks/useStuffedCard";
import SelectMultiple from "./SelectMultiple";

const FormPerson = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [formDataAvatar, setFormDataAvatar] = useState(null);
  const [urlAvatar, setUrlAvatar] = useState("");
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false)



  const arraySkill = skills?.map((skill) => skill.value)

  const [body, setBody] = useState();

  const urlAvatarImage = (url) => {
    setUrlAvatar(url);
  };

  const handleChange = (e) => {
    setBody(stuffedCard(e.target, urlAvatar, arraySkill));
  }

  useEffect(() => {
    setFormDataAvatar(document.getElementById("formAvatar"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const urlImage = await submitImage(formDataAvatar);
    try {
      setLoading(true)
      const body = {
        name: form.get("name"),
        lastName: form.get("lastName"),
        email: form.get("email"),
        role: form.get("role"),
        country: form.get("country"),
        photo: urlImage,
        modality: form.get("modality"),
        experience: form.get("experience"),
        favorite: false,
        hasBadge: false,
        linkPortfolio: form.get("linkPortfolio"),
        linkedin: form.get("socialMediaLinkedin"),
        github: form.get("socialMediaGitHub"),
        twitter: form.get("socialMediaTwitter"),
        skills: arraySkill,
      };
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="flex mx-1 h-full lg:mx-28 xl:mx-52 gap-8 my-10 sm:mx-9 2xl:mx-80">
      <div className="w-96 h-96 hidden sm:flex sticky top-9">
        <Person person={body} array={arraySkill}/>
      </div>
      <div className="w-full  bg-victoria-bgCardPrimary px-1 sm:px-10 sm:pb-5 rounded-lg shadow-pers ">
        <div className="flex flex-col ">
          <div>
            <h2 className="text-4xl text-center m-3  text-victoria-textPrimary font-bold">
              Crear perfil
            </h2>
          </div>
        </div>
        <Avatar urlAvatar={urlAvatarImage} />
        <form id="formulario" onSubmit={handleSubmit} onChange={handleChange}>
          <div className="mt-4 space-y-6">
            <SelectMultiple skillSelect={setSkills} />
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="password"
                id="name"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                maxLength={15}
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="lastName"
                maxLength={15}
              >
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>

            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="role"
              >
                Rol
              </label>
              <select
                name="role"
                id="role"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                <option value="" disabled selected hidden>Seleccionar</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>

            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="country"
                id="country"
              >
                País
              </label>
              <select
                name="country"
                id="country"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                <option value="" disabled selected hidden>Seleccionar</option>
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
                name="modality"
                id="modality"
              >
                Modalidad
              </label>
              <select
                name="modality"
                id="modality"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                <option value="" disabled selected hidden>Seleccionar</option>
                {modalities.map((modality) => (
                  <option key={modality} value={modality}>
                    {modality}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="experience"
                id="experience"
              >
                Experiencia
              </label>
              <select
                name="experience"
                id="experience"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                <option value="" disabled selected hidden>Seleccionar</option>
                {experiences.map((experience) => (
                  <option key={experience.name} value={experience.name}>
                    {experience.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="linkPortfolio"
                id="linkPortfolio"
              >
                Link de portafolio
              </label>
              <input
                type="text"
                id="linkPortfolio"
                name="linkPortfolio"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="socialMediaGitHub"
                id="socialMediaGitHub"
              >
                GitHub
              </label>
              <input
                type="text"
                id="socialMediaGitHub"
                name="socialMediaGitHub"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="socialMediaLinkedin"
                id="socialMediaLinkedin"
              >
                Linkedin
              </label>
              <input
                type="text"
                id="socialMediaLinkedin"
                name="socialMediaLinkedin"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="socialMediaTwitter"
                id="socialMediaTwitter"
              >
                Twitter
              </label>
              <input
                type="text"
                id="socialMediaTwitter"
                name="socialMediaTwitter"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>
            <div className="col-span-full">
              <button
                className="items-center justify-center w-full px-6 py-2.5 text-center text-victoria-textPrimary bg-victoria-buttonPrimary border-2 rounded-full nline-flex hover:bg-victoria-buttonSecondary hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                type="submit"
              >
                {!loading ? 'Crear' : 'Cargando...'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPerson;
