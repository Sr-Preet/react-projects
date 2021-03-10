import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { closeSideBar, isShowSideBar } = useGlobalContext()
  return (
    <div
      className={`${
        isShowSideBar ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((link) => {
            const { page, links } = link
            return (
              <article key={page}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((sublink, index) => {
                    const { label, icon, url } = sublink
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
