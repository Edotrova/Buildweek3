

export class Users {
    id: number | undefined;
    username: string;
    name: string;
    surname: string;
    regDate: Date;
    date: Date;
    email: string;
    password: string;
    role: string;
    bio: string | undefined
    constructor(username: string, name: string, surname: string, date: Date, email: string, password: string, bio?: string) {
        this.username = username
        this.name = name
        this.surname = surname
        this.regDate = new Date()
        this.date = date
        this.email = email
        this.password = password
        this.bio = bio
        this.role = 'user'

    }
}
