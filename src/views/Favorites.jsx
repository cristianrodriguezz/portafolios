import { useState } from "react";
import { getPerson } from "../services/getPerson";
import { useEffect } from "react";
import ListPersons, { Person } from "../components/ListPersons";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(window.localStorage.getItem("user"));
  const id = user?.user?._id;
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [persons, setPersons] = useState([]);
  console.log(persons);

  useEffect(() => {
    setLoading(true);
    getPerson(id)
      .then((res) => res.json())
      .then((data) => setFavorites(data.data[0].favorites))
      .catch(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUsers(favorites);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  const getUsers = async (arrayIds) => {
    const usuarios = [];
    for (const id of arrayIds) {
      try {
        setLoading(true);
        const apiUrl = `${URL}/auth/repositorie/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        usuarios.push(data.data[0]);
      } catch (error) {
        console.log(`Error al obtener el usuario con ID ${id}:`, error);
      } finally {
        setLoading(false);
      }
    }
    setPersons(usuarios);
  };

  return (
    <div>
      {loading ? (
        <div className="h-screen grid place-content-center">
          <div className="loader "></div>
        </div>
      ) : persons.length === 0 ? (
        <div className="h-screen grid place-content-center">Todavía no tenés ningún usuario como favorito</div>
      ) : (
        <ul className="gap-4  m-auto pr-2 pl-2  sm:my-10   sm:grid sm:grid-cols-2  lg:grid-cols-3 lg:ml-20 lg:mr-20 xl:grid-cols-4 2xl:mr-60 2xl:ml-72 pt-8   text-victoria-bodyText ">
          {persons?.map((person) => (
            // eslint-disable-next-line react/jsx-key
            <Person person={person} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
