import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { TokenService } from '../../application/services/tokenService'
import { buildErrorResponse, buildSuccessResponse } from '../../infra/responseApi'
import { UserService } from '../../application/services/userService'
import { CreateUserRequestDto, AuthUserRequestDto } from '../../application/dtos/user'
import { createRequire } from 'module'

export class UserHandler {
  constructor(private userService: UserService, tokenService: TokenService) {}

  async create(app: FastifyInstance, request: FastifyRequest<{ Body: CreateUserRequestDto }>, reply: FastifyReply): Promise<void> {
    if (request.validationError) {
      reply.code(400).send(buildErrorResponse({ message: request.validationError.message }))
      return
    } else {
      const createRequest: CreateUserRequestDto = request.body
      const user = await this.userService.createClient(createRequest)

      const token = new TokenService()
      const tokens = await token.generateToken(app, user, reply)

      reply
        .code(200)
        .setCookie('refreshToken', tokens.refreshToken, {
          path: '/',
          secure: true,
          httpOnly: true,
          sameSite: true
        })
        .send(buildSuccessResponse({ accessToken: tokens.accessToken }))
    }
  }

  public async getUser(app: FastifyInstance, request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      if (request.headers.authorization) {
        const accessToken = app.jwt.decode<{ email: string }>(request.headers.authorization.split(' ')[1])
        if (accessToken?.email) {
          const user = await this.userService.getClient(accessToken.email)
          reply.status(200).send(buildSuccessResponse(user))
        } else throw new Error()
      }
    } catch (err) {
      throw new Error()
    }

    //const createRequest: AuthUserRequestDto = request.body
    //const user = await this.userService.getClient(createRequest)
  }

  public async auth(app: FastifyInstance, request: FastifyRequest<{ Body: AuthUserRequestDto }>, reply: FastifyReply): Promise<void> {
    const { email, password } = request.body
    try {
      const user = await this.userService.authUser(email, password)
      if (user) {
        const token = new TokenService()
        const tokens = await token.generateToken(app, user, reply)

        reply
          .code(200)
          .setCookie('refreshToken', tokens.refreshToken, {
            path: '/',
            secure: true,
            httpOnly: true,
            sameSite: true
          })
          .send(buildSuccessResponse({ accessToken: tokens.accessToken }))
      } else throw new Error()
    } catch (err: any) {
      reply.code(400).send(buildErrorResponse({ message: err }))
    }
  }
}
