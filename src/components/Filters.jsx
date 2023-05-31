import { useContext, useId } from "react";
import { FiltersContext } from "../context/filters";

const Filters = () => {
  const idSelectRol = useId();
  const idSelectCountry = useId();
  const idSelectExperience = useId();
  const idSelectModality = useId();
  // const idSelect
  const { setFilters } = useContext(FiltersContext);

  const handleChangeFiltersRol = (e) => {
    setFilters((prev) => ({
      ...prev,
      role: e.target.value,
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
  const handleClickDisableFilters = () => {
    setFilters({
      role: "all",
      country: "all",
      favorite: "none",
      experience: "none",
      modality: "none",
    });
  };

  return (
    <aside
      className=" h-screen w-96 p-4 pt-8 sticky
     top-0 left-0 break-words border-r"
    >
      <p className="text-center font-bold text-2xl">Filtros</p>
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor={idSelectRol}>Rol</label>
          <select
            name={idSelectRol}
            id={idSelectRol}
            placeholder="Rol"
            className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
            onChange={handleChangeFiltersRol}
          >
            <option value="all">Todos</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
          </select>
        </div>
        <div>
          <label htmlFor={idSelectCountry}>País</label>
          <select
            className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5"
            onChange={handleChangeFiltersCountry}
            id={idSelectCountry}
          >
            <option value="all">Todos</option>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Cuba">Cuba</option>
          </select>
        </div>
        <div>
          <label htmlFor={idSelectExperience}>Experiencia</label>
          <select
            id={idSelectExperience}
            className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
            onChange={handleChangeFiltersExperience}
          >
            <option value="none">Todos</option>
            <option value="Sin experiencia">Sin experiencia</option>
            <option value="6 meses">6 meses</option>
            <option value="1 año">1 año</option>
          </select>
        </div>
        <div>
          <label htmlFor={idSelectModality}>Modalidad</label>
          <select
            id={idSelectModality}
            className="border bg-victoria-bgCardSecondary border-victoria-bgCardPrimary text-victoria-textPrimary text-sm rounded-lg focus:ring-victoria-buttonPrimary focus:border-victoria-buttonPrimary block w-full p-2.5 "
            onChange={handleChangeFiltersExperience}
          >
            <option value="none">Todos</option>
            <option value="Sin experiencia">Sin experiencia</option>
            <option value="6 meses">6 meses</option>
            <option value="1 año">1 año</option>
          </select>
        </div>
        <button onClick={handleClickDisableFilters}>Eliminar filtros</button>
      </div>
    </aside>
  );
};

export default Filters;
