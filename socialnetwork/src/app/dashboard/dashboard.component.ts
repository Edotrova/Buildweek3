import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authSvc:AuthService) { }

  user:Users = this.authSvc.getLogged()

  ngOnInit(): void {
  }


GoToCreatePost(){
  this.router.navigate(['/createpost'])
}

}
