export default (productId, title, cost) => dispatch => {
  dispatch({
    type: 'CART_ADD',
    productId,
    title,
    cost,
  })
}