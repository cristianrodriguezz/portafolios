import "./App.css";
import Filters from "./components/Filters";
import ListPersons from "./components/ListPersons";
import Layout from "./layouts/Layout";
import { persons } from "./mocks/persons.json";
import { useFilters } from "./hooks/useFilters";
import { useState } from "react";

function App() {
  const [personss] = useState(persons);
  const { filterPersons } = useFilters();

  const filteredPersons = filterPersons(personss);

  return (
    <Layout>

      <main className="h-full text-white font-medium flex  w-full">
        <Filters />
        <ListPersons persons={filteredPersons} />
      </main>
    </Layout>
  );
}

export default App;
