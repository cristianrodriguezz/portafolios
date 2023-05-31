import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);
  const filterPersons = (persons) => {
    return persons.filter((person) => {
      return (
        (filters.country === "all" || person.country === filters.country) &&
        (filters.role === "all" || person.role === filters.role) &&
        (filters.favorite === "none" || filters.favorite === person.favorite)
      );
    });
  };

  return { filterPersons, setFilters , filters};
}
