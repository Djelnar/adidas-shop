const server = new (require('koa'))
const serve = require('koa-static')
const path = require('path')
const views = require('koa-views')
const router = require('koa-router')()

router.get('/', async ctx => {
    await ctx.render('index')
})

server
    .use(views(path.join(__dirname)))
    .use(serve('dist'))
    .use(router.routes())
    .listen(4444, () => {
      console.log('listening...')
    })