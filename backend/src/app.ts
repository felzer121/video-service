import loadApp from './server'
import Fastify from 'fastify'

const application = (async function main(): Promise<void> {
  const app = Fastify({ logger: true })
  app.register(loadApp, { prefix: 'api' })

  //app.addContentTypeParser(/^application\/.+\+json$/, { parseAs: 'string' }, app.getDefaultJsonParser('error', 'ignore'))

  await app.listen({ port: 8000 as number }, (err) => {
    if (err) {
      throw err
    }
    console.log('Server listening on http://localhost:8000')
  })
})()
