export default (data) => dispatch => {
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
    }))
}