import { useContext, useId } from "react";
import { FiltersContext } from "../context/filters";

const Filters = () => {
  const idSelect = useId();
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

  return (
    <aside
      className="w-auto h-screen bg-victoria-bgCardPrimary p-4 pt-8 sticky
     top-0 left-0 break-words border-r"
    >
      Filtros
      <div>
        <select
          name="rol"
          id={idSelect}
          placeholder="Rol"
          className="text-letters bg-black"
          onChange={handleChangeFiltersRol}
        >
          <option value="all">Todos</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
        </select>
        <select
          className="text-letters bg-black"
          onChange={handleChangeFiltersCountry}
        >
          <option value="all">Todos</option>
          <option value="Argentina">Argentina</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Cuba">Cuba</option>
        </select>
      </div>
    </aside>
  );
};

export default Filters;
