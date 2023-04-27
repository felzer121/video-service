import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { TokenService } from '../../application/services/tokenService'
import { buildErrorResponse, buildSuccessResponse } from '../../infra/responseApi'
import { UserService } from '../../application/services/userService'
import { CreateUserRequestDto, AuthUserRequestDto } from '../../application/dtos/user'
import { User } from '../../domain/user/user.entity'

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
      console.log(request.cookies)
      if (request.headers.authorization) {
        const accessToken = app.jwt.decode<{ email: string }>(request.headers.authorization.split(' ')[1])
        if (accessToken?.email) {
          const user = await this.userService.getClient(accessToken.email)
          reply.status(200).send(buildSuccessResponse(user))
        } else throw Error('Error decode accessToken')
      } else if (request.cookies.refreshToken) {
        const verify = app.jwt.verify(request.cookies.refreshToken, { complete: true })

        const token = new TokenService()
        const user = app.jwt.decode<User>(request.cookies.refreshToken)
        if (user && verify) {
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
        } else throw Error('Error decode refreshToken')
      } else throw Error('Missing refreshToken')
    } catch (err) {
      reply.code(200).send(buildErrorResponse(err))
    }
  }

  public async auth(app: FastifyInstance, request: FastifyRequest<{ Body: AuthUserRequestDto }>, reply: FastifyReply): Promise<void> {
    const { login, password } = request.body

    try {
      const user = await this.userService.authUser(login, password)
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
    } catch (err) {
      reply.code(400).send(buildErrorResponse(err))
    }
  }
}
