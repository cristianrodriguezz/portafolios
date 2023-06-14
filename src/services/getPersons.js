export const getPersons = async (page = 0, limit = 20 ) => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  let apiUrl = `${URL}/auth/repositories?limit=${limit}&page=${page}`;
  return fetch(apiUrl);
};
