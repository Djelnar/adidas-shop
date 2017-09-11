const initialState = {
  isError: false,
  isAwaitCheckout: false,
  canProceed: false,
  isSpecial: false,
  rest: 0
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'AWAIT_CHECKOUT_TRY':
      return {
        ...state,
        isAwaitCheckout: true
      }
    case 'CHECKOUT_ERROR':
      return {
        ...initialState,
        isError: true,
      }
    case 'CHECKOUT_SPECIAL':
      return {
        ...initialState,
        canProceed: true,
        isSpecial: true,
        rest: action.rest,
      }
    case 'CHECKOUT_POSSIBLE':
      return {
        ...initialState,
        canProceed: true,
      }
    case 'DENY_SPECIAL':
      return {
        ...state,
        isSpecial: false,
      }
    default:
      return state
  }
}