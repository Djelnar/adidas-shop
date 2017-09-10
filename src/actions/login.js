export default (data) => dispatch => {
  dispatch({
    type: 'AWAIT_LOGIN'
  })
  const url = '/login'
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
      type: 'LOGIN_FAILURE'
    }))
}