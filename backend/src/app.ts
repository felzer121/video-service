import loadApp from './server'
import Fastify from 'fastify'

const application = (async function main(): Promise<void> {
  const app = Fastify({ logger: true })
  app.register(loadApp, { prefix: 'api' })
  await app.listen(8000 as number, '0.0.0.0')
})()
