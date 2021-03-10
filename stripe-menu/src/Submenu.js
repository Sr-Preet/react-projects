import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const subMenuRef = useRef(null)
  const {
    page: { page, links },
    isShowSubMenu,
    location,
  } = useGlobalContext()
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    setColumns('col-2')
    subMenuRef.current.style.left = location.center
    subMenuRef.current.style.top = location.bottom
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [isShowSubMenu, page, location, links])
  return (
    <aside
      ref={subMenuRef}
      className={`${isShowSubMenu ? 'submenu show' : 'submenu'}`}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
