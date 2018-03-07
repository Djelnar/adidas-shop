const initialState = {
  products: [],
  isFetching: true,
  isError: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AWAIT_LIST':
      return {
        ...initialState,
      }
    case 'GOT_LIST':
      return {
        products: action.products,
        isFetching: false,
      }
    case 'ERROR_LIST':
      return {
        ...initialState,
        isError: true,
      }
    default:
      return state
  }
}
