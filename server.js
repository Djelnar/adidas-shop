const server = new (require('koa'))
const serve = require('koa-static')
const path = require('path')
const views = require('koa-views')
const router = require('koa-router')()
const bodyParser = require('koa-body')
//const cors = require('kcors')
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
  await handleLogin(login, password).then(login => {
    ctx.status = 200
    ctx.body = {
      type: 'LOGIN_SUCCESS',
      login
    }
  }).catch(login => {
    ctx.status = 401
    ctx.body = {
      type: 'LOGIN_FAILURE'
    }
  })
})


server
  //.use(cors())
  .use(views(path.join(__dirname)))
  .use(serve('dist'))
  .use(router.routes())
  .listen(3525, _ => {
    console.log('listening...')
  })
  
  
  
  
  
  
  
  