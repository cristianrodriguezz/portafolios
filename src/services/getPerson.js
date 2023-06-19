export const getPerson = async (id) => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  let apiUrl = `${URL}/auth/repositorie/${id}`;

  

  return fetch(apiUrl)

}