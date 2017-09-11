const server = new (require('koa'))
const serve = require('koa-static')
const path = require('path')
const views = require('koa-views')
const router = require('koa-router')()
const bodyParser = require('koa-body')

router.get('*', async ctx => {
  await ctx.render('index')
})

const handleLogin = (login, password) => {
  return new Promise((resolve, reject) => {
    if (password === '1234') {
      setTimeout(_ => {
        resolve(login)
      }, 1000)
    } else {
      setTimeout(_ => {
        reject(login)
      }, 1000)
    }
  })
}

router.post('/login', bodyParser(), async ctx => {
  const { login, password } = ctx.request.body
  try {
    const log = await handleLogin(login, password)
    ctx.status = 200
    ctx.body = {
      type: 'LOGIN_SUCCESS',
      login: log
    }
  } catch (e) {
    ctx.status = 401
    ctx.body = {
      type: 'LOGIN_FAILURE'
    }
  }
})

const checkTime = hour => {
  return new Promise((resolve, reject) => {
    if (hour >= 10 && hour <= 20) {
      setTimeout(_ => {
        resolve(hour)
      }, 1000)
    } else {
      setTimeout(_ => {
        reject(hour)
      }, 1000)
    }
  })
}

router.post('/checkhour', bodyParser(), async ctx => {
  const { hour } = ctx.request.body
  try {
    const h = await checkTime(hour)
    ctx.status = 200
    ctx.body = {
      type: 'DELIVERY_POSSIBLE',
      hour: h
    }
  } catch (e) {
    ctx.status = 200
    ctx.body = {
      type: 'DELIVERY_IMPOSSIBLE'
    }
  }
})

const isCheckoutPossible = (total) => {
  return new Promise((resolve, reject) => {
    if (total > 1000) {
      resolve(total)
    } else {
      reject(1000 - total)
    }
  })
}

router.post('/trycheckout', bodyParser(), async ctx => {
  const { total } = ctx.request.body
  try {
    const s = await isCheckoutPossible(total)
    ctx.status = 200
    ctx.body = {
      type: 'CHECKOUT_POSSIBLE'
    }
  } catch (e) {
    ctx.status = 200
    ctx.body = {
      type: 'CHECKOUT_SPECIAL',
      rest: e
    }
  }
})

server
  .use(views(path.join(__dirname)))
  .use(serve('dist'))
  .use(router.routes())
  .listen(3525, _ => {
    console.log('listening...')
  })
  
  
  
  
  
  
  
  