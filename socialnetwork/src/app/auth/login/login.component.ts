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

  form!:FormGroup;
  statusChange!:Event



  
  constructor( private userSvc: UsersService, private router: Router, private auth:AuthService ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  signIn(){
  console.log(this.statusChange) 
   if (this.statusChange){
    this.auth.login(new Users( '','', '', new Date, this.form.value.email, this.form.value.password, ''))
      .subscribe(authentication => {
        this.auth.saveAuthToLocal(authentication)
        console.log(this.statusChange)
        // this.router.navigate(['/dashboard'])
      })
    } else {

      {
        this.auth.login(new Users( '','', '', new Date, this.form.value.email, this.form.value.password, ''))
          .subscribe(authentication => {
this.auth.saveAuthToSession(authentication)
            // this.router.navigate(['/dashboard'])
          })
        }

    }
  
  }
   

}
