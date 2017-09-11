export default (data) => dispatch => {
  dispatch({
    type: 'AWAIT_CHECKOUT_TRY'
  })
  const url = '/trycheckout'
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(r => r.json())
    .then(r => dispatch({
      ...r
    })).catch(e => dispatch({
      type: 'CHECKOUT_ERROR'
    }))
}