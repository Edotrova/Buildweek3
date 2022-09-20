export class Users {
    id:number | undefined;
    username:string;
    name:string ;
    surname:string ;
    date: Date ;
    birthdate:Date ;
    email:string;
    password:string;
    role:string;
    constructor(username:string, name:string, surname:string, birthdate:Date, email:string, password:string , role:string) {
       this.username = username
        this.name = name
       this.surname = surname
       this.date = new Date()
      this.birthdate = birthdate
        this.email = email
    this.password = password
    this.role = 'user'

    }
}
