import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Users } from 'src/app/models/users';
import { __values } from 'tslib';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;

  constructor( private router: Router, private auth:AuthService ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
   
  }

  // signUp(){
  //   this.userSvc.add(this.form.value).subscribe(res => {
  //     this.form.reset()
  //     this.router.navigate([''])
  //   })
  // }

  signUp(){
   
  
   
    this.auth.register(new Users( this.form.value.username, this.form.value.name,this.form.value.surname, this.form.value.date, this.form.value.email, this.form.value.password))
    .subscribe(authentication => {
      this.auth.saveAuthToStorage(authentication)
      console.log(this.form.value.birthdate)
      this.router.navigate(['/dashboard'])
  })
  }


}
