import React, { useState } from "react";
import './App.css'
import { data1 } from './data'

function App() {
  const [data, setData] = useState(data1);
  return (
    <div className='main'>
      <div className='reminders'>
        <p className='heading'>{data.length} birthdays today</p>
        {data.map((person) => {
          const { id, name, age, img } = person
          return (
            <section key={id} className='single'>
                <img src={img} alt={name} />
              <div className='person_data'>
                <p>{name}</p>
                <p>{age}</p>
              </div>
            </section>
          )
        })}
        <button className='btn' onClick={()=> setData([])}>CLEAR ALL</button>
      </div>
    </div>
  )
}

export default App
