import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ id, itemName, removeItems, editItems, clearItems }) => {
  return (
    <div className='grocery-container'>
      <div className='grocery-list'>
        <article className='grocery-item'>
          <p className='title'>{itemName}</p>
          <div className='btn-container'>
            <button
              type='button'
              onClick={() => editItems(id, itemName)}
              className='edit-btn'
            >
              <FaEdit />
            </button>
            <button
              type='button'
              onClick={() => removeItems(id)}
              className='delete-btn'
            >
              <FaTrash />
            </button>
          </div>
        </article>
        
      </div>
    </div>
  )
}

export default List
