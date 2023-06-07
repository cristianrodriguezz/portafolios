import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);
  
  const filterPersons = (persons) => {
    return persons?.filter((person) => {
      return (
        (filters.country === "all" || person.country === filters.country) &&
        (filters.work === "all" || person.work === filters.work) &&
        (filters.favorite === "none" || filters.favorite === person.favorite) &&
        (filters.experience === "none" || filters.experience === person.experience) &&
        (filters.modality === "none" || filters.modality === person.modality)
        
      );
    });
  };

  return { filterPersons, setFilters , filters};
}
