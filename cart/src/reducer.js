export const reducer = (state, action) => {
  const ch = action.type
  switch (ch) {
    case 'FETCHING':
      return { ...state, loading: true }
    case 'DISPLAYING':
      return { ...state, cart: action.payload, loading: false }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'CART_COUNT':
      let count = 0
      state.cart.map((item) => {
        return count += item.amount
      })
      return { ...state, amount: count }
    case 'CART_TOTAL':
      let totalTemp = 0
      state.cart.map((item) => {
        return totalTemp += item.amount * item.price
      })
      return { ...state, total: totalTemp }
    case 'INCREASE':
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 }
        }
        return item
      })
      return { ...state, cart: tempCart }
    case 'DECREASE':
      let tempCart1 = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.amount === 0) {
            return { ...item }
          }
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
      return { ...state, cart: tempCart1 }
    case 'REMOVE':
      let tempCart2 = state.cart.filter((item) => item.id !== action.payload)
      return { ...state, cart: tempCart2 }
    default:
      throw new Error('no matching action type')
  }
}
