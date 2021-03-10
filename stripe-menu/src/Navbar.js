import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openSideBar } = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const temp = e.target.getBoundingClientRect()
    const center = (temp.left + temp.right) / 2
    const bottom = temp.bottom
    openSubmenu(page, { center, bottom })
  }

  const handleSubmenu = (e)=>{
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((link, index) => {
            const { page } = link
            return (
              <li key={index}>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
