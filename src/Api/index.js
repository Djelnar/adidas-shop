export const get = path =>
  fetch(`https://erodionov-adidas-fake-api.now.sh/${path}`)
    .then(r => r.json())

export const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(r => r.json())

  export const imageLink = (id, fileName, height) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`

  export const groups = [
  {
    group: 'football',
    types: [
      'cleats',
      'apparel',
      'accessories'
    ]
  }, {
    group: 'running',
    types: [
      'shoes',
      'apparel',
      'accessories'
    ]
  }, {
    group: 'basketball',
    types: [
      'shoes',
      'apparel',
      'accessories'
    ]
  },
]