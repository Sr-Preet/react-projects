import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [page, setPage] = useState({ page: '', links: [] })
  const [location, setLocation] = useState({})
  const [isShowSubMenu, setShowSubMenu] = useState(false)
  const [isShowSideBar, setShowSideBar] = useState(false)

  const openSubmenu = (pg, location) => {
    setPage(() => sublinks.find((link) => link.page === pg))
    setLocation(location)
    setShowSubMenu(true)
  }

  const closeSubmenu = () => {
    setShowSubMenu(false)
  }
  const openSideBar = () => {
    setShowSideBar(true)
  }
  const closeSideBar = () => {
    setShowSideBar(false)
  }

  return (
    <AppContext.Provider
      value={{
        openSubmenu,
        closeSubmenu,
        isShowSubMenu,
        page,
        location,
        openSideBar,
        closeSideBar,
        isShowSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
