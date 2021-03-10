import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cockTails, loading } = useGlobalContext()
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {cockTails ? (
            <section className='section'>
              <h2 className='section-title'>cocktails</h2>
              <div className='cocktails-center'>
                {cockTails.map((drink) => {
                  return (
                    <Cocktail key={drink.idDrink} {...drink} />
                  )
                })}
              </div>
            </section>
          ) : (
            <h2 className='section-title'>
              no cocktails matched your search criteria
            </h2>
          )}
        </>
      )}
    </>
  )
}

export default CocktailList
