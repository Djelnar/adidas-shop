import { get, imageLink } from '../Api'


export default (group, type) => dispatch => {
  dispatch({
    type: 'AWAIT_LIST'
  })
  get(`v1/products/${group}/${type}`)
    .then(data => dispatch({
      type: 'GOT_LIST',
      products: data.items
    })).catch(e => dispatch({
      type: 'ERROR_LIST'
    }))

}