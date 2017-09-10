export default (productId) => dispatch => {
  dispatch({
    type: 'CART_DECREASE',
    productId,
  })
}