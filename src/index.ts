import type { SocketAddress } from 'bun'
import { Hono } from 'hono'

type Bindings = {
  ip: SocketAddress
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.json({
    yourIp: c.env.ip 
  })
})

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req, server) {
    return app.fetch(req, { ip: server.requestIP(req) })
  }
})

console.log(`Listening on localhost:${server.port}`)