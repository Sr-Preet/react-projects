import React from 'react'
import { useGlobalContext } from '../context'

function Search() {
  const { search, query, errorText } = useGlobalContext()
  return (
    <form className='search-form' onSubmit={(e)=>e.preventDefault()}>
      <h2>Search Movies</h2>
      <input
        onChange={(e) => search(e.target.value)}
        type='text'
        value={query}
        className='form-input'
      />
      <div className='error'>{errorText}</div>
    </form>
  )
}

export default Search
