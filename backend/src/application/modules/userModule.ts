import { FastifyInstance, FastifyPluginAsync } from 'fastify'
import { UserRouter } from '../../web/routes/user.router'

const userModule: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
  const controller = new UserRouter()
  controller.registerRoutes(fastify)
}

export default userModule
