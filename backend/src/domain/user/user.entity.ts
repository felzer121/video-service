
export class User {
    public id: number;

    public name: string;

    public login: string;

    constructor(partial?: Partial<User>) {
        Object.assign(this, partial);
    }
}
interface UserServer extends User {
    password: string
}
export type UserResult = { rows: [UserServer] }
