/**
 * Created by sks on 2018/4/9.
 */
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('dist/server/json/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8081, () => {
  console.log('JSON Server is running')
})
