import React from 'react'
import Movie from './Movie'
import { useGlobalContext } from '../context'
import Loading from './Loading'

function MoviesList() {
  const { movies, loading } = useGlobalContext()
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className='movies'>
          {movies.map((movie) => {
            return <Movie key={movie.imdbID} {...movie} />
          })}
        </section>
      )}
    </>
  )
}

export default MoviesList
