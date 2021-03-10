import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
  const [load, setLoad] = useState(true)
  const [res, setRes] = useState([])

  const getCockTails = useCallback(async () => {
    const response = await fetch(url)
    const data = await response.json()
    const {drinks} = data
    setRes(drinks)
    setLoad(false)
  }, [url])

  useEffect(() => {
    getCockTails()
  }, [url, getCockTails])
  return {res, load}
}
