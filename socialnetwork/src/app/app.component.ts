import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socialnetwork';

  constructor(private auth:AuthService, private router: Router){
  
  }

  logout():void {

    let exit = this.auth.isUserLogged();
 
     if (exit) {
 
       this.auth.logOut();
       this.router.navigate(['/'])
 
     } else {
 
       sessionStorage.removeItem('user-access')
       this.router.navigate(['/'])
 
     }
 
   }

}


