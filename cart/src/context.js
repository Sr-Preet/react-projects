import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import { reducer } from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const defaultState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const Increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const Decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  const Remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const fetchData = async () => {
    dispatch({ type: 'FETCHING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAYING', payload: cart })
  }

  useEffect(() => {
    dispatch({ type: 'CART_COUNT' })
    dispatch({ type: 'CART_TOTAL' })
  }, [state.cart, state.amount])

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        Increase,
        Decrease,
        Remove,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
