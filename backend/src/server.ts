import { FastifyRequest, FastifyReply, FastifyPluginAsync, FastifyInstance } from 'fastify'
import jwt, { JWT } from '@fastify/jwt'
import fp from 'fastify-plugin'
import type { FastifyCookieOptions } from '@fastify/cookie'
import cookie from '@fastify/cookie'
import fastifySwagger from '@fastify/swagger'
import clientModule from './application/modules/userModule'
import fastifySwaggerUi from '@fastify/swagger-ui'
import env from './config'
import { buildErrorResponse } from './infra/responseApi'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import cors from '@fastify/cors'
//import authenticate from './application/decorate/auth';

declare module 'fastify' {
  interface FastifyRequest {
    jwt: JWT
  }
  export interface FastifyInstance {
    authenticate: any
  }
}

const registerPlugins = fp(async (app: FastifyInstance): Promise<void> => {
  app.register(fastifySwagger, {
    mode: 'dynamic',
    openapi: {
      components: {
        securitySchemes: {
          accessToken: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            description: 'JWT access token to authorize the request, sent on the request header.'
          }
        }
      }
    }
  })

  app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    initOAuth: {},

    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next()
      },
      preHandler: function (request, reply, next) {
        next()
      }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header
  })

  app.register(jwt, {
    secret: env.jwtSecret,
    cookie: {
      cookieName: 'refreshToken',
      signed: false
    },
    sign: {
      expiresIn: '30d'
    }
  })

  app.register(cookie, {
    secret: env.jwtSecret
  } as FastifyCookieOptions)

  app.register(cors, { origin: 'http://localhost:3000', methods: 'http://localhost:3000' })

  app.register(require('./application/decorate/auth'))
})

export const registerModules = (modules: FastifyPluginAsync[]) =>
  fp(async (app: FastifyInstance): Promise<void> => {
    for (const moduleFn of modules) {
      await moduleFn(app, {})
    }
  })

const loadApp: FastifyPluginAsync = async (app: FastifyInstance) => {
  app.register(registerPlugins).after(() => {
    app.setValidatorCompiler(({ schema, method, url, httpPart }) => {
      return ajv.compile(schema)
    })
  })
  const ajv = new Ajv({
    allErrors: true,
    $data: true
  })
  addFormats(ajv)

  await app.register(registerModules([clientModule]))
}

export default loadApp
