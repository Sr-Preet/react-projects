import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {search} = useGlobalContext()
  return (
    <section className="section search">
      <form className='search-form'>
        <div className="form-control">
          <label htmlFor='name'>search your favourite cocktail</label>
          <input type='text' id='name' onChange={(e)=>search(e.target.value)} name='name' />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
