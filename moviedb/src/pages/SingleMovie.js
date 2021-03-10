import React from 'react'
import { Link, useParams } from 'react-router-dom'

function SingleMovie() {
  const { imdbID } = useParams('imdbID')
  const [movie, setMovie] = React.useState({})
  const getMovie = async () => {
    const data = await (
      await fetch('https://omdbapi.com/?apikey=895952f1&i=' + imdbID)
    ).json()
    setMovie(data)
  }
  React.useEffect(() => {
    getMovie()
  }, [imdbID])
  return (
    <section className='single-movie'>
      <img src={movie.Poster} alt={movie.Title} />
      <div className='single-movie-info'>
        <h2>{movie.Title}</h2>
        <p>
          <h4 style={{ display: 'inline' }}>Plot: </h4>
          {movie.Plot}
        </p>
        <h4>IMDB: {movie.imdbRating}</h4>
        <h4>Released: {movie.Released}</h4>
        <h4>Runtime: {movie.Runtime}</h4>
        <h4>Genre : {movie.Genre}</h4>
        <h4>Directed By: {movie.Director}</h4>
        <h4>Cast: {movie.Actors}</h4>
        <h4>Language: {movie.Language}</h4>
        {movie.Type === 'movie' ? (
          <h4>Box Office: {movie.BoxOffice}</h4>
        ) : (
          <h4>Type: {movie.Type}</h4>
        )}

        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
