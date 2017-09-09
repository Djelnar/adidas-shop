const initialState = {
  product: {},
  images: [],
  isFetching: true,
  isError: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'AWAIT_ITEM':
      return {
        ...initialState,
      }
    case 'GOT_ITEM':
      return {
        product: action.product,
        images: action.images,
        isFetching: false,
      }
    case 'ERROR_ITEM':
      return {
        ...initialState,
        isFetching: false,
        isError: true,
      }
    default:
      return state
  }
}