import React from 'react'
import Home from './Home'
import Modal from './Modal'
import SideBar from './SideBar'
import { AppProvider } from './context'

function App() {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <SideBar />
    </AppProvider>
  )
}

export default App
