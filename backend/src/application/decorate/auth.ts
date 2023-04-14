import { FastifyInstance, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'
import { TokenService } from '../services/tokenService'
import { buildErrorResponse, buildSuccessResponse } from "../../infra/responseApi"
import { decode } from 'punycode'

module.exports = fp(function(fastify: FastifyInstance, opts, next) {
  fastify.decorate('authenticate', function(pluginOptions) {
    return async function(request: FastifyRequest, reply: any, done) {
      try {
        if (request.headers.authorization)
          fastify.jwt.verify(request.headers.authorization.split(' ')[1])
        else
          throw new Error()
      } catch (err) {
        try {
          const { refreshToken } = request.cookies
          if (refreshToken) {
            const user = fastify.jwt.verify(refreshToken, { complete: true })

            const token = new TokenService()
            const tokens = await token.generateToken(fastify, fastify.jwt.decode(refreshToken), reply)

            reply
              .code(200)
              .setCookie('refreshToken', tokens.refreshToken, {
                path: '/',
                secure: true,
                httpOnly: true,
                sameSite: true
              })
              .send(buildSuccessResponse({ accessToken: tokens.accessToken }))
          } else {
            throw new Error()
          }
        } catch (err) {
          done(err)
        }
      }
      done()
    }
  })
  next()
}, { name: 'authenticate' })
