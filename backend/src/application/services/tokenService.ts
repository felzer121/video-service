import { FastifyInstance, FastifyReply } from 'fastify'
import { User } from '../../domain/user/user.entity'
import { CreateUserRequestDto } from '../dtos/user'

export class TokenService {
  constructor() {}

  public async generateToken(app: FastifyInstance, payload: User, reply: FastifyReply): Promise<{ refreshToken: string; accessToken: string }> {
    const accessToken = await reply.jwtSign(payload, { expiresIn: '5m' })
    const refreshToken = await reply.jwtSign(payload, { expiresIn: '30d' })
    return { accessToken: accessToken, refreshToken: refreshToken }
  }
}
