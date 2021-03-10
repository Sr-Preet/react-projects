import React from 'react'
import './main.css'
import questions from './data'
import SingleQuestion from './Question'

function Accordion() {
  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default Accordion
