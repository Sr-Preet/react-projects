import React from 'react'

function Categories(props) {
  const { categories, filterItems } = props

  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterItems(category)}
            className='filter-btn'
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
