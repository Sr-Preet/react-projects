import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error('Could Not Fetch')
          }
          return response.json()
        })
        .then((data) => {
          setData(data)
          setLoading(false)
          setError(null)
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setLoading(false)
            setError(err.message)
          }
        })
    }, 1000)
    return () => abortCont.abort()
  }, [url])

  return { data, loading, error }
}

export default useFetch
