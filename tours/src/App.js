import React, { useState, useEffect } from 'react'
import './main.css'
const url = 'https://603cc34cf4333a0017b6846d.mockapi.io/places'
const url2 = 'https://picsum.photos/v2/list?page=1&limit=5'

function App() {
  const [places, setPlaces] = useState([])
  const [images, setImages] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const removePlace = (id) => {
    const newPlaces = places.filter((place) => place.id !== id)
    console.log(newPlaces.length)
    if (newPlaces.length < 1) {
      setIsEmpty(true)
      setTitle('No Data To Show')
    }
    setPlaces(newPlaces)
  }
  useEffect(() => {
    fetch(url2)
      .then((resp) => resp.json())
      .then((images) => {
        setImages(images)
        console.log(images)
      })
      .catch((error) => console.log(error))
    fetch(url)
      .then((resp) => resp.json())
      .then((places) => {
        setPlaces(places)
        setIsLoading(false)
        setTitle('Random Data')
      })
      .catch((error) => console.log(error))
  }, [refresh])
  return (
    <main>
      <section>
        <div className='title'>
          {isLoading && <h2>Loading...</h2>}
          <h2>{title}</h2>
          <div className='underline'></div>
          {isEmpty && (
            <button
              className='btn'
              onClick={() => {
                setRefresh(!refresh)
                setIsEmpty(!isEmpty)
              }}
            >
              Refresh
            </button>
          )}
        </div>
        <div>
          {places.map((place) => {
            const { id, title, price, description } = place
            return (
              <article key={id} className='single-tour'>
                {images.map((image_link) => {
                  const { download_url, id } = image_link
                  if (id >= 1) {
                    return false
                  }
                  return <img key={id} src={download_url} alt={title} />
                })}
                {/* <img src={image} alt={title} /> */}
                <footer>
                  <div className='tour-info'>
                    <h4>{title}</h4>
                    <h4>${price}</h4>
                  </div>
                  <p>{description}</p>
                  <button
                    className='delete-btn'
                    onClick={() => removePlace(id)}
                  >
                    not interested
                  </button>
                </footer>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
