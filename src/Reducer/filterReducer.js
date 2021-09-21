
function filterReducer(state, action) {
    switch (action.type) {
      case "SORT":
        return { ...state, sortBy: action.payload }
      case "IN_STOCK":
        return (state = { ...state, stockBy: !state.stockBy })
      case "FAST_DELIVERY":
        return (state = { ...state, deliveryBy: !state.deliveryBy })
      case "DEFAULT_FILTER":
        return (state = {...state , stockBy: true , deliveryBy : false})
      default:
        return state;
    }
  }

export default filterReducer;