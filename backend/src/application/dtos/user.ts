
export interface CreateUserRequestDto {
    name: string
    email: string
    password: string
}

export interface AuthUserRequestDto {
    login: string
    password: string
}
