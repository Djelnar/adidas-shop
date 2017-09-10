export default (productId) => dispatch => {
  dispatch({
    type: 'CART_REMOVE',
    productId,
  })
}