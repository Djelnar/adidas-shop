const initialState = {
  isError: false,
  isAwaitHours: false,
  hour: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AWAIT_HOURS':
      return {
        ...state,
        isAwaitHours: true,
      }
    case 'DELIVERY_IMPOSSIBLE':
      return {
        ...state,
        isError: true,
        isAwaitHours: false,
        hour: null,
      }
    case 'DELIVERY_POSSIBLE':
      return {
        ...initialState,
        hour: action.hour,
      }
    default:
      return state
  }
}
