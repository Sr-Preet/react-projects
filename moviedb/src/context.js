import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorText, setErrorText] = useState('')
  const [query, setQuery] = useState('batman')

  const search = async (str) => {
    setQuery(str)
    setLoading(true)
    const term = str || ''
    const fetchURL = `https://omdbapi.com/?s=${term}&apikey=895952f1`
    const data = await (await fetch(fetchURL)).json()
    if (data.Search) {
      setMovies(data.Search)
      setLoading(false)
      setErrorText('')
    }
    else{
      setMovies(movies)
      setLoading(false)
      setErrorText(data.Error)
    }
  }

  useEffect(() => {
    search(query)
  }, [])
  return (
    <AppContext.Provider value={{ loading, movies, search, errorText, query }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
