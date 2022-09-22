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

  saveAuthToLocal(access:AuthResponse){

    localStorage.setItem('user-access',JSON.stringify(access))

  }

  saveAuthToSession(access:AuthResponse){

    sessionStorage.setItem('user-access',JSON.stringify(access))

  }

  isUserLogged(): boolean{

    return localStorage.getItem('user-access') != null

  }

  logOut(){
        
    localStorage.removeItem('user-access')
    sessionStorage.removeItem('user-access')
  
  }


  login(loginData:Login){

    return this.http.post<AuthResponse>(this.apiUrl+'/login', loginData)

  }

  register(register:Users){

    return this.http.post<AuthResponse>(this.apiUrl+'/register', register)

  }

  getLogged(){
    let exit = this.isUserLogged();

    if (exit) {
    let logged : string | null = localStorage.getItem('user-access')
    return logged ? JSON.parse(logged).user : null
  }
  else {
    let logged : string | null = sessionStorage.getItem('user-access')
    return logged ? JSON.parse(logged).user : null
  }

  

}
}
