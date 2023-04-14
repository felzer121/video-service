import { FastifyInstance, FastifyReply } from "fastify"
import { CreateClientRequestDto } from "../dtos/createClientRequestDto"

export class TokenService {
    constructor() { }

    public async generateToken(app: FastifyInstance, payload: CreateClientRequestDto, reply: FastifyReply): Promise<{ refreshToken: string, accessToken: string }> {
        const accessToken = await reply.jwtSign(payload, { expiresIn: '5m' })
        const refreshToken = await reply.jwtSign(payload, { expiresIn: '30d' })
        return { accessToken: accessToken, refreshToken: refreshToken }
    }
}
