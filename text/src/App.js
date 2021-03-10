import React, { useState } from 'react'

function App() {
  const [text, setText] = useState([])

  const get = async (val) => {
    let data = await fetch(
      `https://baconipsum.com/api/?type=meat-and-filler&paras=${val}&format=json`
    )
    let resp = await data.json()
    setText(resp)
  }
  const getText = (e) => {
    e.preventDefault()
    let el = document.getElementById('amount')
    get(el.value)
  }
  
  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className='lorem-form'>
        <label>paragraphs:</label>
        <input type='number' name='amount' id='amount' />
        <button className='btn' onClick={getText}>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((s, index) => {
          return <p key={index}>{s}</p>
        })}
      </article>
    </section>
  )
}

export default App
