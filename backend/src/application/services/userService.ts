import { CreateUserRequestDto, AuthUserRequestDto } from "../dtos/user"
import { User, UserResult } from '../../domain/user/user.entity'
import { db } from "../db/db"
import bcrypt from 'bcrypt'

export class UserService {
  constructor() { }

  public async createClient(_request: CreateUserRequestDto): Promise<User> {
    const { rows } = await db.raw<UserResult>(`INSERT INTO public.users (name, email, password) VALUES ('${_request.name}', '${_request.email}', '${bcrypt.hashSync(_request.password, '3')}') RETURNING id, email, name`)

    return new User(rows.at(0))
  }

  public async getClient(email: string): Promise<User> {
    const { rows } = await db.raw<UserResult>(`SELECT name, email FROM public.users WHERE email = '${email}'`)

    return new User(rows.at(0))
  }

  public async authUser(email: string, password: string): Promise<User | void> {
    const { rows } = await db.raw<UserResult>(`SELECT * FROM public.users WHERE email = '${email}'`)
    const hash = rows.at(0)?.password
    if (hash) {
      const isValid = await bcrypt.compare(password, hash)
      if (isValid)
        return new User(rows.at(0))
      else
        throw Error()
    }
    else
      throw Error()
  }
}
