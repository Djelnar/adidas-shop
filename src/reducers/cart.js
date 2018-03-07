const initialState = {
  addedIds: [],
  quantityById: {},
  thanks: false,
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case 'CART_ADD':
      if (state.map((v) => v.productId).indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, {
        productId: action.productId,
        title: action.title,
        cost: action.cost,
      }]
    case 'CART_REMOVE': {
      return state.filter((v) => v.productId !== action.productId)
    }
    case 'CART_DECREASE': {
      return state
    }
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case 'CART_ADD':
      const { productId } = action

      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      }
    case 'CART_REMOVE': {
      const { productId } = action

      return {
        ...state,
        [productId]: undefined,
      }
    }
    case 'CART_DECREASE': {
      const { productId } = action

      return {
        ...state,
        [productId]: (state[productId] === 1 ? 1 : (state[productId] - 1)),
      }
    }
    default:
      return state
  }
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ERASE':
      return {
        ...initialState,
        thanks: true,
      }
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      }
  }
}

export default cart

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'CART_ADD':
//       return [
//         ...state,
//         action.item
//       ]
//     case 'CART_DECREASE': {
//       const idx = state.indexOf(action.item)
//       if (idx !== (-1)) {
//         state.splice(idx, 1)
//         return state
//       } else {
//         return state
//       }
//     }
//     case 'CART_DELETE': {
//       const idx = state.indexOf(action.item)
//       if (idx !== (-1)) {
//         return state.filter(v => v !== action.item)
//       } else {
//         return state
//       }
//     }
//     default:
//       return state
//   }
// }
