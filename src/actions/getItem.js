import { get, imageLink } from '../Api'


export default (group, type, id) => dispatch => {
  dispatch({
    type: 'AWAIT_ITEM'
  })
  get(`v1/products/${group}/${type}/${id}`)
    .then(data => dispatch({
      type: 'GOT_ITEM',
      product: data,
      images: data.images.map((el, idx) => {
        return imageLink(el.id, el.fileName, 160)
      })
    })).catch(e => dispatch({
      type: 'ERROR_ITEM'
    }))

}