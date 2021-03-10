import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { links, social } from './data'
import { useGlobalContext } from './context'

function SideBar() {
  const { isSideBar, closeSidebar } = useGlobalContext()
  return (
    <aside className={`sidebar ${isSideBar && 'show-sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default SideBar
