import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './imodels/login';
import { Users } from './models/users';


type AuthResponse = {

  accessToken: string,
  user:Users

}


@Injectable({
  providedIn: 'root'
})

export class AuthService   {

  apiUrl: string = 'http://localhost:3000';

  constructor(private http:HttpClient) {}

  saveAuthToStorage(access:AuthResponse){

    localStorage.setItem('user-access',JSON.stringify(access))

  }

  isUserLogged(): boolean{

    return localStorage.getItem('user-access') != null

  }

  logOut(){

    localStorage.removeItem('user-access')

  }



  login(loginData:Login){

    return this.http.post<AuthResponse>(this.apiUrl+'/login', loginData)

  }

  

}
