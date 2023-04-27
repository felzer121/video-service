import { JSONSchemaType } from 'ajv'
import { FastifySchema, FastifyRequest } from 'fastify'

const usernameSchema: JSONSchemaType<string> = {
  type: 'string',
  minLength: 3,
  maxLength: 15
}

const emailSchema: JSONSchemaType<string> = {
  type: 'string',
  format: 'email'
}
const passwordShema: JSONSchemaType<string> = {
  type: 'string',
  minLength: 6,
  maxLength: 20
}

export const registerSchema: FastifySchema = {
  body: {
    type: 'object',
    properties: {
      name: usernameSchema,
      email: emailSchema,
      password: passwordShema
    },
    required: ['name', 'email', 'password']
  }
}

export const authorizationShema: FastifySchema = {
  body: {
    additionalProperties: false,
    required: ['login', 'password'],
    properties: {
      login: emailSchema || usernameSchema,
      password: passwordShema
    }
  }
}
