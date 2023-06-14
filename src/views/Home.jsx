import Filters from "../components/Filters";
import ListPersons from "../components/ListPersons";
import { useFilters } from "../hooks/useFilters.js";
import { useFetchPersons } from "../hooks/useFetchPersons";

const Home = () => {
  const { loading, persons, setPage } = useFetchPersons();
  const { filterPersons } = useFilters();
  const personsFiltered = filterPersons(persons);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <main className="h-full  text-white font-medium flex  ">
        <Filters />
        {loading ? (
          <div>Cargando....</div>
        ) : (
          <ListPersons persons={personsFiltered} />
        )}
      </main>
      <div className="grid place-content-center my-3 ">
        <button
          className="bg-victoria-buttonPrimary rounded-full m-auto p-2"
          onClick={handleNextPage}
        >
          Ver más
        </button>
      </div>
    </>
  );
};

export default Home;
