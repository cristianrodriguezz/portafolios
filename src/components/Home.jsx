import Filters from "./Filters";
import ListPersons from "./ListPersons";
import { useFilters } from "../hooks/useFilters.js";
import { useEffect, useState } from "react";

const Home = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = import.meta.env.VITE_BACKEND_URL;

  const getPersons = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setPersons(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPersons()
  }, []);

  const { filterPersons } = useFilters();
  console.log(persons);

  const filteredPersons = filterPersons(persons);
  return (
    <main className="h-full  text-white font-medium flex  w-full">
      <Filters />
      {loading ? (
        <div>Cargando....</div>
      ) : (
        <ListPersons persons={filteredPersons} />
      )}
    </main>
  );
};

export default Home;
