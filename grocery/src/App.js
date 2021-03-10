import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [alert, setAlert] = useState(false)
  const [alertText, setAlertText] = useState('')
  const [initial, setInitial] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (initial && isEditing && editID) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, itemName: initial }
          }
          return item
        })
      )
      let btn = document.getElementById('sub')
      btn.innerText = 'Submit'
      setInitial('')
      setIsEditing(false)
      setEditID(null)
      setAlertText('Value Changed')
      setAlert(true)
    } else {
      if (!initial) {
        setAlertText('Please Enter Something')
        setAlert(true)
        return
      }
      if (initial && !isEditing && !editID) {
        const item = { id: new Date().getTime().toString(), itemName: initial }
        setList([...list, item])
        setAlertText('Item Added')
        setInitial('')
        setAlert(true)
      }
    }
  }

  const editItems = (id, name) => {
    let btn = document.getElementById('sub')
    btn.innerText = 'Edit'
    setInitial(name)
    setIsEditing(true)
    setEditID(id)
    setInitial(name)
  }

  const removeItems = (id) => {
    const newList = list.filter((item) => item.id !== id)
    setAlertText('Item Removed')
    setAlert(true)
    setList(newList)
  }

  const clearItems = () => {
    setList([])
    setAlertText('List Emptied')
    setAlert(true)
    setInitial('')
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert && <Alert text={alertText} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            id='grocery'
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={initial}
            onChange={(e) => setInitial(e.target.value)}
          />
          <button type='submit' id='sub' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <>
          {list.map((item) => {
            return (
              <List
                clearItems={clearItems}
                key={item.id}
                editItems={editItems}
                removeItems={removeItems}
                {...item}
              />
            )
          })}
          <button className='clear-btn' onClick={clearItems}>
            clear items
          </button>
        </>
      )}
    </section>
  )
}

export default App
