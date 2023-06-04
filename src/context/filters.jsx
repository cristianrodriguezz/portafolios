import { createContext, useState } from "react";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    work: "all",
    country: "all",
    favorite: "none",
    experience: "none",
    modality: "none"
  })
  return (
    <FiltersContext.Provider
      value={{filters,setFilters}}
    >
      {children}
    </FiltersContext.Provider>
  );
};
