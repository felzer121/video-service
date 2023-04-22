import { Router } from './router'
import { FastifyInstance } from 'fastify'
import { registerSchema, authorizationShema } from '../../domain/user/userSchema'
import { UserHandler } from '../controller/user.controller'
import { UserService } from '../../application/services/userService'
import { TokenService } from '../../application/services/tokenService'
import { AuthUserRequestDto, CreateUserRequestDto } from '../../application/dtos/user'

export class UserRouter implements Router {
  private userHandler: UserHandler = new UserHandler(new UserService(), new TokenService())

  registerRoutes(app: FastifyInstance): void {
    app.post<{ Body: CreateUserRequestDto }>(
      '/registration',
      {
        attachValidation: true,
        schema: registerSchema
      },
      (request, reply) => this.userHandler.create(app, request, reply)
    )
    app.post<{ Body: AuthUserRequestDto }>(
      '/authorization',
      {
        attachValidation: true,
        schema: authorizationShema
      },
      (request, reply) => this.userHandler.auth(app, request, reply)
    )
    app.get(
      '/client',
      {
        schema: {
          security: [{ accessToken: [] }]
        }
      },
      (request, reply) => this.userHandler.getUser(app, request, reply)
    )
    app.get('/test', {}, (request, reply) => {
      reply.code(200).send('Zolupo')
    })
    app.get<{ Body: AuthUserRequestDto }>(
      '/protected',
      {
        schema: {
          security: [
            {
              accessToken: []
            }
          ]
        }
      },
      (request, reply) => this.userHandler.auth(app, request, reply)
    )
  }
}
