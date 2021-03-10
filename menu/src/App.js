import React from 'react'
import './main.css'
import items from './data'
import Categories from './Categories'
import Menu from './Menu'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const filterItems = (props) => {
    if (props === 'all') {
      setMenu(items)
    } else {
      const filteredItems = items.filter((item) => item.category === props)
      setMenu(filteredItems)
    }
  }
  const [menu, setMenu] = React.useState(items)
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menu} />
      </section>
    </main>
  )
}

export default App
