import { useEffect, useState } from "react";
import { submitImage } from "../hooks/submitImage";
import { countries } from "../mocks/countries.json";
import { experiences } from "../mocks/experience.json";
import { modalities } from "../mocks/modalities.json";
import { roles } from "../mocks/roles.json";
import Avatar from "../components/Avatar";
import { Person } from "../components/ListPersons";
import { stuffedCard } from "../hooks/useStuffedCard";
import SelectMultiple from "../components/SelectMultiple";

const FormRepositorie = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const {user} = JSON.parse(localStorage.getItem("user"));

  const [formDataAvatar, setFormDataAvatar] = useState(null);
  const [skills, setSkills] = useState(() => !user.skills ? [] : user.skills)
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState();
  const id = user?._id;
  const token = user?.token;
  const [urLocal, setUrlLocal] = useState(user?.photo)

  console.log(user);

  



  useEffect(() => {
    setBody((prev) => ({
      ...prev,
      skills: skills,
      photo: urLocal,
    }));
  }, [skills, urLocal]);

  const urlAvatarImage = (url) => {
    setUrlLocal(url);
  };

  const handleChange = (e) => {
    setBody(stuffedCard(e.target, urLocal, skills));
  };

  useEffect(() => {
    setFormDataAvatar(document.getElementById("formAvatar"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const urlImage = await submitImage(formDataAvatar);
    setUrlLocal(urlImage)


    try {
      setLoading(true);
      const body = {
        name: form.get("name"),
        lastName: form.get("lastName"),
        work: form.get("work"),
        country: form.get("country"),
        photo: urlImage,
        modality: form.get("modality"),
        experience: form.get("experience"),
        favorite: false,
        hasBadge: false,
        portfolio: form.get("linkPortfolio"),
        social_media: {
          linkedin: form.get("socialMediaLinkedin"),
          github: form.get("socialMediaGitHub"),
          twitter: form.get("socialMediaTwitter"),
        },
        skills
      };

      const response = await fetch(`${URL}/auth/repositories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      window.localStorage.removeItem("user");
      const updatedUserObject = { token, user: data.user };

      window.localStorage.setItem("user", JSON.stringify(updatedUserObject));

      
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex mx-1 h-full lg:mx-28 xl:mx-52 gap-8 my-10 sm:mx-9 2xl:mx-80">
      <div className="w-64 h-96 hidden sm:flex sticky top-9">
        <Person person={body} />
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
                defaultValue={user.name}
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
                defaultValue={user.lastName}
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              />
            </div>

            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-victoria-textPrimary"
                name="work"
              >
                Rol
              </label>
              <select
                defaultValue={user ? user.work : ""}
                name="work"
                id="work"
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                <option value="" disabled hidden>
                  Seleccionar
                </option>
                {roles.map((work) => (
                  <option key={work} value={work}>
                    {work}
                  </option>
                ))}
              </select>
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
                defaultValue={user ? user.country : ""}
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                <option value="" disabled hidden>
                  Seleccionar
                </option>
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
                defaultValue={user ? user.modality : ""}
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                <option value="" disabled hidden>
                  Seleccionar
                </option>
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
                defaultValue={user ? user.experience : ""}
                className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              >
                <option value="" disabled hidden>
                  Seleccionar
                </option>
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
                defaultValue={user.portfolio}
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
                className="items-center justify-center w-full px-6 py-2.5 text-center text-victoria-textPrimary bg-victoria-buttonPrimary  rounded-full  hover:bg-victoria-buttonSecondary hover:border-victoria-buttonSecondary hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                type="submit"
              >
                {!loading ? "Guardar cambios" : "Cargando..."}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRepositorie;
