import loadApp from "./server"
import Fastify from 'fastify'

async function main(): Promise<void> {
  const app = Fastify({ logger: true })
  app.register(loadApp)
  await app.listen(8000 as number, '0.0.0.0');
}

main();
