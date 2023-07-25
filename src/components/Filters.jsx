import { useContext, useId, useRef } from "react";
import { FiltersContext } from "../context/filters";
import { countries } from "../mocks/countries.json";
import { roles } from "../mocks/roles.json";
import { experiences } from "../mocks/experience.json";
import { modalities } from "../mocks/modalities.json";

const Filters = () => {
  const idSelectRol = useId();
  const idSelectCountry = useId();
  const idSelectExperience = useId();
  const idSelectModality = useId();
  const { setFilters } = useContext(FiltersContext);
  const formRef = useRef();


  const handleChangeFiltersRol = (e) => {
    setFilters((prev) => ({
      ...prev,
      work: e.target.value,
    }));
  };

  const handleChangeFiltersCountry = (e) => {
    setFilters((prev) => ({
      ...prev,
      country: e.target.value,
    }));
  };
  const handleChangeFiltersExperience = (e) => {
    setFilters((prev) => ({
      ...prev,
      experience: e.target.value,
    }));
  };
  const handleClickDisableFilters = (e) => {
    e.preventDefault()
    formRef.current.reset();
    setFilters({
      work: "all",
      country: "all",
      favorite: "none",
      experience: "none",
      modality: "none",
    });
  };

  return (
    <div className="filtersContainer  w-6/12  sm:w-1/3  lg:w-2/12 " >
      <aside
        className=" h-screen w-full  p-4 pt-8 sticky
     top-0 left-0 break-words border-r aside"
      >
        <p className="text-center font-bold text-2xl">Filtros</p>
        <form  ref={formRef} className="flex flex-col gap-5">
          <div>
            <label htmlFor={idSelectRol}>Rol</label>
            <select
              name={idSelectRol}
              id={idSelectRol}
              placeholder="Rol"
              className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              onChange={handleChangeFiltersRol}
            >
              <option  value={'all'} selected>
                Todos
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={idSelectCountry}>País</label>
            <select
              className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5"
              onChange={handleChangeFiltersCountry}
              id={idSelectCountry}
            >
              <option value={'all'} selected>
                Todos
              </option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={idSelectExperience}>Experiencia</label>
            <select
              id={idSelectExperience}
              className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              onChange={handleChangeFiltersExperience}
            >
              <option  value={'none'} selected>
                Todos
              </option>
              {experiences.map((experience) => (
                <option key={experience.name} value={experience.name}>
                  {experience.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={idSelectModality}>Modalidad</label>
            <select
              id={idSelectModality}
              className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
              onChange={handleChangeFiltersExperience}
            >
              <option   value={'none'} selected >
                Todos
              </option>
              {modalities.map((modality) => (
                <option key={modality} value={modality}>
                  {modality}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-victoria-buttonPrimary rounded-md hover:bg-victoria-buttonSecondary" onClick={handleClickDisableFilters}>Eliminar filtros</button>
        </form>
      </aside>
    </div>
  );
};

export default Filters;
