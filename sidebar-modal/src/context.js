import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const openSidebar = () => {
    setIsSideBar(true)
  }
  const closeSidebar = () => {
    setIsSideBar(false)
  }

  const openModal = () => {
    setIsModal(true)
  }
  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSideBar,
        isModal,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
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
