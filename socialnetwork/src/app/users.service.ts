import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenCrudService } from './gencrud.service';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends GenCrudService <Users> {

  constructor(private http:HttpClient) {
    super(http, 'http://localhost:3000/users');
  }

  apiUsers:string= 'http://localhost:3000/users'

  getUserById(id:number | undefined){
    return this.http.get<Users[]>(this.apiUsers+ '/?id='+ id)
  }
}
