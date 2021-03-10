import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../useFetch'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams('idDrink')
  const fetchURL = url + id
  const { res, load } = useFetch(fetchURL)
  return (
    <>
      {load ? (
        <Loading />
      ) : (<>
      {res.map((item)=>{
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strCategory,
          strAlcoholic,
          strGlass,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        } = item
        return (
          <section key={idDrink} className='section cocktail-section'>
            <Link to='/' className='btn btn-primary'>
              back home
            </Link>
            <h2 className='section-title'>{strDrink}</h2>
            <div className='drink'>
              <img src={strDrinkThumb} alt={strDrink} />
              <div className='drink-info'>
                <p>
                  <span className='drink-data'>name: </span>
                  {strDrink}
                </p>
                <p>
                  <span className='drink-data'>category: </span>
                  {strCategory}
                </p>
                <p>
                  <span className='drink-data'>info: </span>
                  {strAlcoholic}
                </p>
                <p>
                  <span className='drink-data'>glass: </span>
                  {strGlass}
                </p>
                <p>
                  <span className='drink-data'>instructions: </span>
                  {strInstructions}
                </p>
                <p>
                  <span className='drink-data'>ingredients</span>
                  <span>{strIngredient1}</span>
                  <span>{strIngredient2}</span>
                  <span>{strIngredient3}</span>
                  <span>{strIngredient4}</span>
                </p>
              </div>
            </div>
          </section>
        )
      })}
      </>)}
    </>
  )
}

export default SingleCocktail
