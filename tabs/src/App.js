import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [stitle, setTitle] = useState('')
  const [companies, setCompanies] = useState([])
  const [companiesData, setCompaniesData] = useState([])
  const [single, setSingle] = useState([])
  const [value, setValue] = useState(0)

  const setData = (props) => {
    console.log(props)
    const Comp = companiesData.filter((single) => single.company === props)
    setSingle(Comp)
  }

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const comp = data.filter((s) => s.company)
        const tmp = data.filter((s) => s.company === 'TOMMY')
        setSingle(tmp)
        setCompanies(comp)
        setCompaniesData(data)
        setIsLoading(false)
        setTitle('Experience')
      })
  }, [])
  return (
    <>
      {!isLoading && (
        <section className='section'>
          <div className='title'>
            <h2>{stitle}</h2>
            <div className='underline'></div>
          </div>
          <div className='jobs-center'>
            <div className='btn-container'>
              {companies.map((single, index) => {
                const { company } = single
                return (
                  <button
                    key={index}
                    className={`job-btn ${index === value && 'active-btn'}`}
                    onClick={() => {
                      setValue(index)
                      setData(company)
                    }}
                  >
                    {company}
                  </button>
                )
              })}
            </div>
            <article className='job-info'>
              {single.map((cmp) => {
                console.log(cmp)
                const { title, dates, company, duties } = cmp
                return (
                  <>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>
                    {duties.map((duty) => {
                      return (
                        <div className='job-desc'>
                          <FaAngleDoubleRight />
                          <p>{duty}</p>
                        </div>
                      )
                    })}
                  </>
                )
              })}
            </article>
          </div>
          <button type='button' className='btn'>
            more info
          </button>
        </section>
      )}
      {isLoading && (
        <section className='section'>
          {' '}
          <div className='title'>
            <h1>Loading...</h1>
          </div>
        </section>
      )}
    </>
  )
}

export default App
