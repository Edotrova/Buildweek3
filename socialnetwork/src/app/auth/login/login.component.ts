import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  checkboxState!: boolean;
  loggingUser = new Users('', '', '', new Date, '', '', '')


  constructor(private userSvc: UsersService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  // password validate Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$');
  // email validate 

  statusChange(): void {
    this.checkboxState = !this.checkboxState
    console.log(this.checkboxState)
  }

  signIn() {
    
      this.auth.login(this.form.value)
        .subscribe(authentication => {
          if (this.checkboxState === true) {
          this.auth.saveAuthToLocal(authentication)
        } else {
          this.auth.saveAuthToSession(authentication)
        }
          this.router.navigate(['/dashboard'])
        })  
  }

  logout(): void {

      this.auth.logOut()
      this.router.navigate(['/'])
    
  }
}
