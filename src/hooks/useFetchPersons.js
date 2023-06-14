/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getPersons } from "../services/getPersons";

const INITIAL_PAGE = 0
export const useFetchPersons = () => {

  const [persons, setPersons] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPersons()
    .then(res => res.json())
    .then(data => setPersons(data.data.docs))
    .catch(setLoading(false))
    .finally(setLoading(false))
  }, [])

  useEffect(() => {
    if(page === INITIAL_PAGE ) return
    setLoadingNextPage(true)
    getPersons(page)
    .then(res => res.json())
    .then(data =>{ 
      setPersons(prev => prev.concat(data.data.docs))
      setLoadingNextPage(false)
    })
  }, [page]);

  return { loading , persons, loadingNextPage, setPage }
};
