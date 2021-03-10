import React, { useState, useContext, useEffect } from 'react'
import { useFetch } from './useFetch'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const { res, load } = useFetch(url)
  const [loading, setLoading] = useState(true)
  const [cockTails, setCockTails] = useState([])

  
  const search = async (query) => {
    setLoading(true)
    const term = query || ''
    const fetchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
    const data = await (await fetch(fetchURL)).json()
    const { drinks } = data
    setCockTails(drinks)
    setLoading(false)
  }

  useEffect(() => {
    setCockTails(res)
    setLoading(load)
  }, [res, load])
  return (
    <AppContext.Provider value={{ loading, cockTails, search }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
