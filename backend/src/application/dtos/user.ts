
export interface CreateUserRequestDto {
    name: string
    email: string
    password: string
}

export interface AuthUserRequestDto {
    email: string
    password: string
}
