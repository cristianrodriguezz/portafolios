import Filters from "../components/Filters";
import ListPersons from "../components/ListPersons";
import { useFilters } from "../hooks/useFilters.js";
import { useFetchPersons } from "../hooks/useFetchPersons";

const Home = () => {
  const { loading ,persons } = useFetchPersons();
  const { filterPersons } = useFilters();
  const personsFiltered = filterPersons(persons.data)

  return (
    <main className="h-full  text-white font-medium flex  w-full">
      <Filters />
      {loading ? (
        <div>Cargando....</div>
      ) : (
        <ListPersons persons={personsFiltered} />
      )}
    </main>
  );
};

export default Home;
