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
}
