import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  useEffect(() => {
    if (showLinks) {
      linksRef.current.style.height = '200px'
    } else {
      linksRef.current.style.height = '0px'
    }
  }, [showLinks])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button onClick={toggleLinks} className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <div
          ref={linksRef}
          className='links-container'
          style={{ height: '0px' }}
        >
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialLink) => {
            const { id, url, icon } = socialLink
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
