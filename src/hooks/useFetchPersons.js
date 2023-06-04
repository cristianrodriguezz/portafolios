/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";


export const useFetchPersons = () => {
  
  // const URL = import.meta.env.VITE_BACKEND_URL;
  const URL = 'https://backend-repositories.onrender.com/api/repositories'
  const [persons, setPersons] = useState([])
  const [loading, setLoading] = useState(true)

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
  }

  useEffect(() => {
    getPersons()
  }, [])

  return {loading , persons }
};
