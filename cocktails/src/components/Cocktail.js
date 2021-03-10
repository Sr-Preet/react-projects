import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({
  idDrink,
  strDrink,
  strAlcoholic,
  strGlass,
  strImageSource,
  strDrinkThumb,
}) => {
  return (
    <article onMouseEnter={(e) => console.log(e)} className='cocktail'>
      <div className='img-container'>
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className='cocktail-footer'>
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link
          className='btn btn-primary btn-details'
          to={`/cocktail/${idDrink}`}
        >
          Details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
