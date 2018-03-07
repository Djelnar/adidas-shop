const Koa = require('koa')
const serve = require('koa-static')
const path = require('path')
const views = require('koa-views')
const router = require('koa-router')()
const bodyParser = require('koa-body')
/* eslint-disable no-magic-numbers */


const server = new Koa()

router.get('*', async (ctx) => {
  await ctx.render('index')
})

const handleLogin = (login, password) => new Promise((resolve, reject) => {
  if (password === '1234') {
    setTimeout(resolve, 1000, login)
  }
  else {
    setTimeout(reject, 1000, login)
  }
})

router.post('/login', bodyParser(), async (ctx) => {
  const { login, password } = ctx.request.body

  try {
    const log = await handleLogin(login, password)

    ctx.status = 200
    ctx.body = {
      type: 'LOGIN_SUCCESS',
      login: log,
    }
  }
  catch (error) {
    ctx.status = 401
    ctx.body = {
      type: 'LOGIN_FAILURE',
    }
  }
})

const checkTime = (hour) => new Promise((resolve, reject) => {
  if (hour >= 10 && hour <= 20) {
    setTimeout(resolve, 1000, hour)
  }
  else {
    setTimeout(reject, 1000, hour)
  }
})

router.post('/checkhour', bodyParser(), async (ctx) => {
  const { hour } = ctx.request.body

  try {
    const hourNew = await checkTime(hour)

    ctx.status = 200
    ctx.body = {
      type: 'DELIVERY_POSSIBLE',
      hour: hourNew,
    }
  }
  catch (error) {
    ctx.status = 200
    ctx.body = {
      type: 'DELIVERY_IMPOSSIBLE',
    }
  }
})

const isCheckoutPossible = (total) => new Promise((resolve, reject) => {
  if (total > 1000) {
    resolve(total)
  }
  else {
    /* eslint-disable prefer-promise-reject-errors */
    reject(1000 - total)
  }
})

router.post('/trycheckout', bodyParser(), async (ctx) => {
  const { total } = ctx.request.body

  try {
    await isCheckoutPossible(total)

    ctx.status = 200
    ctx.body = {
      type: 'CHECKOUT_POSSIBLE',
    }
  }
  catch (error) {
    ctx.status = 200
    ctx.body = {
      type: 'CHECKOUT_SPECIAL',
      rest: error,
    }
  }
})

server
  .use(views(path.join(__dirname)))
  .use(serve('dist'))
  .use(router.routes())
  .listen(3525)

