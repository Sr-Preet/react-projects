import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const defImage =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

function Movie({imdbID, Title, Year, Poster}) {
    return (
        <Link className='movie' to={`/movies/${imdbID}`}>
            <article>
                <img src={Poster==='N/A' ? defImage : Poster} alt={Title} />
                <div className="movie-info">
                    <h4 className="title">{Title}</h4>
                    <p>{Year}</p>
                </div>
            </article>
        </Link>
    )
}

Movie.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string,
  Poster: PropTypes.string.isRequired
}

Movie.defaultProps = {
  Title: 'Default Title',
  Year: '0000',
  Poster: defImage,
}

export default Movie
